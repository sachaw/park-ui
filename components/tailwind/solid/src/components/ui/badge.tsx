import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface BadgeProps extends BadgeVariantProps, HTMLArkProps<'div'> {}

export const Badge = (props: BadgeProps) => {
  const [variantProps, buttonProps] = splitProps(props, ['class', 'size', 'variant'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  return <ark.div class={styles(variantProps)} {...buttonProps} />
}

type BadgeVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'badge',
  defaultVariants: { variant: 'subtle', size: 'md' },
  variants: {
    variant: {
      solid: 'badge--variant_solid',
      subtle: 'badge--variant_subtle',
      outline: 'badge--variant_outline',
    },
    size: { sm: 'badge--size_sm', md: 'badge--size_md', lg: 'badge--size_lg' },
  },
})
