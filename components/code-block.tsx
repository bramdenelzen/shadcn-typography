import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"

interface CodeBlockProps {
  code: string
  lang?: string
}

export async function CodeBlock({ code, lang = "bash" }: CodeBlockProps) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
        theme: "github-dark-dimmed",
        keepBackground: false,
    })
    .use(rehypeStringify)
    .process(`\`\`\`${lang}\n${code}\n\`\`\``)

  return (
    <div 
        className="relative overflow-hidden rounded-lg bg-background p-4 font-mono text-sm text-foreground border"
        dangerouslySetInnerHTML={{ __html: String(file) }}
    />
  )
}
