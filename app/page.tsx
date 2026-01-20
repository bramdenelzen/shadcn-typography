"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/registry/new-york/ui/typography";

export default function Home() {
  const [copied, setCopied] = React.useState(false);
  const installCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/typography.json`;

  const onCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="space-y-4">
        <Typography variant="h1">Typography</Typography>
        <Typography variant="lead">
          A showcase of the typography component variants and their semantic
          mappings.
        </Typography>

        <div className="rounded-lg border bg-muted/50 p-4 relative">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground overflow-x-auto">
              <Terminal className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">{installCommand}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={onCopy}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h2">Construction</Typography>
          <Typography variant="p">
            This component is built to provide semantic HTML structure while
            maintaining visual consistency.
          </Typography>
          <Typography variant="ul">
            <li>
              <strong>Variant Mapping:</strong> Each <code>variant</code> prop
              corresponds to an appropriate HTML tag by default (e.g.,{" "}
              <code>h1</code> renders an <code>&lt;h1&gt;</code>).
            </li>
            <li>
              <strong>Styling:</strong> Uses{" "}
              <code>class-variance-authority</code> (cva) to apply Tailwind
              utility classes based on the selected variant.
            </li>
            <li>
              <strong>Polymorphism:</strong> Supports the <code>asChild</code>{" "}
              prop via <code>@radix-ui/react-slot</code>, allowing you to apply
              typography styles to any underlying component or tag.
            </li>
          </Typography>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Headings</CardTitle>
            <CardDescription>Standard heading hierarchies.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h1</span>
              <Typography variant="h1">Taxonomy of Design</Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h2</span>
              <Typography variant="h2">The Science of Typography</Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h3</span>
              <Typography variant="h3">Principles of Hierarchy</Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h4</span>
              <Typography variant="h4">Visual Balance</Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h5</span>
              <Typography variant="h5">Character Spacing</Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">h6</span>
              <Typography variant="h6">Line Height</Typography>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content & Body</CardTitle>
            <CardDescription>Variants for body text and content emphasis.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">lead</span>
              <Typography variant="lead">
                A modal dialog that interrupts the user with important content and expects a response.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">p</span>
              <Typography variant="p">
                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">body</span>
              <Typography variant="body">
                This is the body variant. It is designed for longer form content and has a relaxed reading experience with slightly muted color.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">large</span>
              <Typography variant="large">
                This is large text used for emphasis or introductions.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">small</span>
              <Typography variant="small">
                This contains email address or other small metadata.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">muted</span>
              <Typography variant="muted">
                This is muted text, useful for secondary information or captions.
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Elements</CardTitle>
            <CardDescription>Specific variants for quotes, code, and labels.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">blockquote</span>
              <Typography variant="blockquote">
                "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">inlineCode</span>
              <Typography variant="p">
                Press <Typography variant="inlineCode" asChild><span className="text-sm">⌘K</span></Typography> to open the command palette.
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">section</span>
              <Typography variant="section">
                Section Header
              </Typography>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">label</span>
              <Typography variant="label">
                Form Label
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lists</CardTitle>
            <CardDescription>Standard ordered and unordered lists.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">ul</span>
              <Typography variant="ul">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </Typography>
            </div>
             <div className="grid gap-2">
              <span className="text-xs text-muted-foreground font-mono">ol</span>
              <Typography variant="ol">
                <li>System boot</li>
                <li>Check hardware</li>
                <li>Load specific modules</li>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
