import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";
import fs from "fs";
import path from "path";

type ComponentItem = {
  title: string;
  component: React.ReactNode;
};

type Section = {
  title: string;
  description: string;
  items: ComponentItem[];
};

const sections: Section[] = [
  {
    title: "Headings",
    description: "Standard heading hierarchies.",
    items: [
      {
        title: "h1",
        component: <Typography variant="h1">Taxonomy of Design</Typography>,
      },
      {
        title: "h2",
        component: (
          <Typography variant="h2">The Science of Typography</Typography>
        ),
      },
      {
        title: "h3",
        component: (
          <Typography variant="h3">Principles of Hierarchy</Typography>
        ),
      },
      {
        title: "h4",
        component: <Typography variant="h4">Visual Balance</Typography>,
      },
      // {
      //   title: "h5",
      //   component: <Typography variant="h5">Character Spacing</Typography>,
      // },
      // {
      //   title: "h6",
      //   component: <Typography variant="h6">Line Height</Typography>,
      // },
    ],
  },
  {
    title: "Content & Body",
    description: "Variants for body text and content emphasis.",
    items: [
      {
        title: "lead",
        component: (
          <Typography variant="lead">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </Typography>
        ),
      },
      {
        title: "p",
        component: (
          <Typography variant="p">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </Typography>
        ),
      },
      // {
      //   title: "body",
      //   component: (
      //     <Typography variant="body">
      //       This is the body variant. It is designed for longer form content and
      //       has a relaxed reading experience with slightly muted color.
      //     </Typography>
      //   ),
      // },
      {
        title: "large",
        component: (
          <Typography variant="large">
            This is large text used for emphasis or introductions.
          </Typography>
        ),
      },
      {
        title: "small",
        component: (
          <Typography variant="small">
            This contains email address or other small metadata.
          </Typography>
        ),
      },
      {
        title: "muted",
        component: (
          <Typography variant="muted">
            This is muted text, useful for secondary information or captions.
          </Typography>
        ),
      },
    ],
  },
  {
    title: "Special Elements",
    description: "Specific variants for quotes, code, and labels.",
    items: [
      {
        title: "blockquote",
        component: (
          <Typography variant="blockquote">
            "After all," he said, "everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege."
          </Typography>
        ),
      },
      {
        title: "inlineCode",
        component: (
          <Typography variant="p">
            Press{" "}
            <Typography variant="inlineCode" asChild>
              <span className="text-sm">⌘K</span>
            </Typography>{" "}
            to open the command palette.
          </Typography>
        ),
      },
      // {
      //   title: "section",
      //   component: <Typography variant="section">Section Header</Typography>,
      // },
      // {
      //   title: "label",
      //   component: <Typography variant="label">Form Label</Typography>,
      // },
    ],
  },
  {
    title: "Lists",
    description: "Standard ordered and unordered lists.",
    items: [
      {
        title: "ul",
        component: (
          <Typography variant="ul">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </Typography>
        ),
      },
      {
        title: "ol",
        component: (
          <Typography variant="ol">
            <li>System boot</li>
            <li>Check hardware</li>
            <li>Load specific modules</li>
          </Typography>
        ),
      },
    ],
  },
];

export default async function Home() {
  const installCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/typography.json`;
  const code = fs.readFileSync(
    path.join(process.cwd(), "registry/new-york/ui/typography.tsx"),
    "utf8",
  );

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="space-y-24">
        <section className="space-y-6">
          <Typography variant="h1">Typography</Typography>
          <Typography variant="lead">
            A showcase of the typography component variants and their semantic
            mappings.
          </Typography>
        </section>

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

        <section>
          <Typography variant="h2">Construction</Typography>
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

        <section>
          <Typography variant="h2" className="mb-6">
            Default variants
          </Typography>
          <ul className="space-y-24">
            {sections.map((section) => (
              <li key={section.title} className="space-y-6">
                <div className="space-y-1">
                  <Typography variant="h3">{section.title}</Typography>
                  <Typography variant="muted">{section.description}</Typography>
                </div>
                <Separator />
                <div className="grid gap-6">
                  {section.items.map((item) => (
                    <div key={item.title} className="grid gap-2">
                      <Typography variant="meta">{item.title}</Typography>
                      {item.component}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
