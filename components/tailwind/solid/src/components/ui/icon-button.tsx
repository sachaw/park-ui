import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface IconButtonProps extends IconButtonVariantProps, HTMLArkProps<'button'> {}

export const IconButton = (props: IconButtonProps) => {
  const [variantProps, iconButtonProps] = splitProps(props, ['class', 'size', 'variant'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  return <ark.button class={styles(variantProps)} {...iconButtonProps} />
}

type IconButtonVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'iconButton',
  defaultVariants: { variant: 'solid', size: 'md' },
  variants: {
    variant: {
      solid: 'iconButton--variant_solid',
      outline: 'iconButton--variant_outline',
      ghost: 'iconButton--variant_ghost',
      link: 'iconButton--variant_link',
      subtle: 'iconButton--variant_subtle',
    },
    size: {
      xs: 'iconButton--size_xs',
      sm: 'iconButton--size_sm',
      md: 'iconButton--size_md',
      lg: 'iconButton--size_lg',
      xl: 'iconButton--size_xl',
      '2xl': 'iconButton--size_2xl',
    },
  },
})
