import { Typography } from "@/components/ui/typography"
import { CodeBlock } from "@/components/code-block"
import { CopyButton } from "@/components/copy-button"

export function InstallationSection() {
  const installCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/typography.json`

  return (
    <section>
      <Typography variant="h2" className="mb-6">
        Installation
      </Typography>
      <div className="relative">
        <CodeBlock code={installCommand} lang="bash" />
        <div className="absolute right-4 top-2">
          <CopyButton
            text={installCommand}
            className="text-zinc-50 hover:bg-zinc-800 hover:text-zinc-50"
          />
        </div>
      </div>
    </section>
  )
}
