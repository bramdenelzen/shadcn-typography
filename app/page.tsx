import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { InstallationSection } from "@/components/sections/installation-section";
import { ExampleCodeSection } from "@/components/sections/example-code-section";
import { DefaultVariantsSection } from "@/components/sections/default-variants-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default async function Home() {
  return (
    <div className="container max-w-3xl mx-auto py-10 px-4 space-y-10 relative">
      <div className="absolute right-4 top-14 flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/bramdenelzen/shadcn-typography"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
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

        <div className="flex justify-center pb-8">
          <Typography variant={"small"}>
            <span className="text-muted-foreground">Made by </span>
            <Link
              className="italic group inline-flex items-center gap-1"
              href="https://github.com/bramdenelzen"
              target="_blank"
            >
              Bram den Elzen
              <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
