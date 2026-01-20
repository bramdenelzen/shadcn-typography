import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "@/components/code-block";
import fs from "fs";
import path from "path";

export function ExampleCodeSection() {
  const code = fs.readFileSync(
    path.join(process.cwd(), "registry/new-york/ui/typography.tsx"),
    "utf8",
  );

  return (
    <section>
      <Typography variant="h2">Construction</Typography>
      <Typography variant="p" className="mb-8">
        This component is built to provide semantic HTML structure while
        maintaining visual consistency.
      </Typography>
      <CodeBlock code={code} lang="tsx" />
    </section>
  );
}
