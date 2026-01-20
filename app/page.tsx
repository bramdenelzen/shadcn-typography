import { Typography } from "@/components/ui/typography"
import { ModeToggle } from "@/components/mode-toggle"
import { InstallationSection } from "@/components/sections/installation-section"
import { ExampleCodeSection } from "@/components/sections/example-code-section"
import { DefaultVariantsSection } from "@/components/sections/default-variants-section"

export default async function Home() {
  return (
    <div className="container max-w-3xl mx-auto py-10 px-4 space-y-10 relative">
      <div className="absolute right-4 top-14">
        <ModeToggle />
      </div>
      <div className="space-y-24">
        <section>
          <Typography variant="h1" className="mb-8">
            Typography
          </Typography>
          <Typography variant="lead">
            This is a shadcn based typography component. Used to keep the visual
            hierarchy of the page consistent, and keep the semantics flexible.
          </Typography>
        </section>

        <InstallationSection />

        <ExampleCodeSection />

        <DefaultVariantsSection />
      </div>
    </div>
  )
}

