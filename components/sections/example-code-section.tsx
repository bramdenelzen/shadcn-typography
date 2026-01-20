import { Typography } from "@/components/ui/typography"
import { CodeBlock } from "@/components/code-block"
import { CopyButton } from "@/components/copy-button"
import fs from "fs"
import path from "path"

export function ExampleCodeSection() {
  const code = fs.readFileSync(
    path.join(process.cwd(), "registry/new-york/ui/typography.tsx"),
    "utf8"
  )

  return (
    <section>
      <Typography variant="h2">
        Construction
      </Typography>
      <Typography variant="p" className="mb-8">
        This component is built to provide semantic HTML structure while
        maintaining visual consistency.
      </Typography>
      <div className="relative">
        <CodeBlock code={code} lang="tsx" />
        <div className="absolute right-4 top-2">
          <CopyButton
            text={code}
            className="text-zinc-50 hover:bg-zinc-800 hover:text-zinc-50"
          />
        </div>
      </div>
    </section>
  )
}
