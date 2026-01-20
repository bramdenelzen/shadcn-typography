import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  lang?: string;
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
    .process(`\`\`\`${lang}\n${code}\n\`\`\``);

  return (
    <div className="relative rounded-xs p-4  bg-background font-mono text-sm border">
      <div className="absolute h-full  top-0 right-0">
        <div className="sticky top-0 ml-auto p-2   flex justify-end w-fit">
          <CopyButton text={code} />
        </div>
      </div>
      <div
        className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        dangerouslySetInnerHTML={{ __html: String(file) }}
      />
    </div>
  );
}
