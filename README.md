# shadcn-typography

A flexible, semantic typography component for [shadcn/ui](https://ui.shadcn.com). Use it to maintain consistent visual hierarchy and semantic HTML structure across your application.

## Installation

```bash
npx shadcn@latest add https://shadcn-typography.vercel.app/r/typography.json
```

## Usage

```tsx
import { Typography } from "@/components/ui/typography"

export default function Page() {
  return (
    <div className="space-y-4">
      <Typography variant="h1">Taxonomy of Design</Typography>
      <Typography variant="lead">
        A modal dialog that interrupts the user with important content and expects a response.
      </Typography>
      <Typography variant="p">
        Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
      </Typography>
    </div>
  )
}
```

## Variants

The component uses a single `variant` prop to handle both styling and semantic HTML elements.

| Variant | HTML Element | Description |
| :--- | :--- | :--- |
| `h1` | `h1` | Extra large heading for page titles. |
| `h2` | `h2` | Section headings. |
| `h3` | `h3` | Subsection headings. |
| `h4` | `h4` | Small section headings. |
| `p` | `p` | Standard paragraph text. |
| `lead` | `p` | Lead paragraph text with larger size and muted color. |
| `large` | `div` | Large text for emphasis. |
| `small` | `small` | Small text for metadata. |
| `muted` | `p` | Muted text for secondary information. |
| `blockquote` | `blockquote` | Blockquotes for citations. |
| `ul` | `ul` | Unordered lists. |
| `ol` | `ol` | Ordered lists. |
| `inlineCode` | `code` | Inline code snippets. |

## Advanced Usage

### Changing Semantics (asChild)

The component supports the `asChild` prop (powered by [Radix UI Slot](https://www.radix-ui.com/primitives/docs/utilities/slot)), allowing you to change the underlying HTML element while maintaining the variant's styling. This is crucial for accessibility and semantic correctness.

```tsx
import { Typography } from "@/components/ui/typography"

export default function Page() {
  return (
    // Looks like an H1, but renders as an H2 tag
    <Typography variant="h1" asChild>
      <h2>Semantic Heading Level 2</h2>
    </Typography>
  )
}
```

## License

MIT © Bram den Elzen
