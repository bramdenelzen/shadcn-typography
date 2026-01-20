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
        theme: {
          dark: "github-dark-default",
          light: "github-light-default",
        },
        keepBackground: false,
    })
    .use(rehypeStringify)
    .process(`\`\`\`${lang}\n${code}\n\`\`\``)

  return (
    <div 
        className="relative overflow-hidden rounded-lg bg-background p-4 font-mono text-sm border"
        dangerouslySetInnerHTML={{ __html: String(file) }}
    />
  )
}
