import {
  NumberInput as ArkNumberInput,
  type NumberInputProps as ArkNumberInputProps,
} from '@ark-ui/react/number-input'
import { forwardRef, type ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface NumberInputProps extends ArkNumberInputProps, NumberInputVariantProps {
  children?: ReactNode
}

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => {
  const { children, className, ...rootProps } = props
  const { root, control, label, input, incrementTrigger, decrementTrigger } = styles({})

  return (
    <ArkNumberInput.Root ref={ref} className={root({ className })} {...rootProps}>
      {children && <ArkNumberInput.Label className={label()}>{children}</ArkNumberInput.Label>}
      <ArkNumberInput.Control className={control()}>
        <ArkNumberInput.Input className={input()} />
        <ArkNumberInput.IncrementTrigger className={incrementTrigger()}>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger className={decrementTrigger()}>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
})

NumberInput.displayName = 'NumberInput'

type NumberInputVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'numberInput',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'numberInput__root',
    label: 'numberInput__label',
    input: 'numberInput__input',
    control: 'numberInput__control',
    incrementTrigger: 'numberInput__incrementTrigger',
    decrementTrigger: 'numberInput__decrementTrigger',
    scrubber: 'numberInput__scrubber',
  },
  variants: {
    size: {
      md: {
        root: 'numberInput__root--size_md',
        label: 'numberInput__label--size_md',
        input: 'numberInput__input--size_md',
        control: 'numberInput__control--size_md',
        incrementTrigger: 'numberInput__incrementTrigger--size_md',
        decrementTrigger: 'numberInput__decrementTrigger--size_md',
        scrubber: 'numberInput__scrubber--size_md',
      },
      lg: {
        root: 'numberInput__root--size_lg',
        label: 'numberInput__label--size_lg',
        input: 'numberInput__input--size_lg',
        control: 'numberInput__control--size_lg',
        incrementTrigger: 'numberInput__incrementTrigger--size_lg',
        decrementTrigger: 'numberInput__decrementTrigger--size_lg',
        scrubber: 'numberInput__scrubber--size_lg',
      },
      xl: {
        root: 'numberInput__root--size_xl',
        label: 'numberInput__label--size_xl',
        input: 'numberInput__input--size_xl',
        control: 'numberInput__control--size_xl',
        incrementTrigger: 'numberInput__incrementTrigger--size_xl',
        decrementTrigger: 'numberInput__decrementTrigger--size_xl',
        scrubber: 'numberInput__scrubber--size_xl',
      },
    },
  },
})

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
)
