import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "@/components/code-block";

export function InstallationSection() {
  const installCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/typography.json`;

  return (
    <section>
      <Typography variant="h2" className="mb-6">
        Installation
      </Typography>
      <CodeBlock code={installCommand} lang="bash" />
    </section>
  );
}
