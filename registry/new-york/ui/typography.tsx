import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'font-heading text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl',
      h2: 'font-heading text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'font-heading text-2xl font-semibold tracking-tight',
      h4: 'font-heading text-xl font-semibold tracking-tight',
      h5: 'font-heading text-lg font-semibold tracking-tight',
      h6: 'font-heading text-base font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      body: 'text-lg leading-relaxed text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      ol: 'my-6 ml-6 list-decimal [&>li]:mt-2',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      inlineCode:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      section: 'text-muted-foreground uppercase tracking-widest text-sm font-medium',
      label: 'text-xs font-semibold text-muted-foreground uppercase tracking-wide',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

type VariantPropType = VariantProps<typeof typographyVariants>['variant']

const variantElementMap: Record<NonNullable<VariantPropType>, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  body: 'p',
  blockquote: 'blockquote',
  section: 'h2',
  label: 'h5',
  ul: 'ul',
  ol: 'ol',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
  inlineCode: 'code',
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variant ? variantElementMap[variant] : 'p') || 'p'

    return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />
  },
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
