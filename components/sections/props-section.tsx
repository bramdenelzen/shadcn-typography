import { Typography } from "@/components/ui/typography"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function PropsSection() {
  const props = [
    {
      prop: "variant",
      type: "string",
      default: '"p"',
      description: "The visual style and semantic element to render.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "Change the default rendered element for the one passed as a child.",
    },
    {
      prop: "as",
      type: "string",
      default: "-",
      description:
        "Change the default rendered element to the one passed as a string.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional CSS classes to apply to the element.",
    },
  ]

  return (
    <section>
      <Typography variant="h2" className="mb-6">
        Props
      </Typography>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.prop}>
                <TableCell className="font-mono font-semibold">
                  {prop.prop}
                </TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  {prop.type}
                </TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  {prop.default}
                </TableCell>
                <TableCell>{prop.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
