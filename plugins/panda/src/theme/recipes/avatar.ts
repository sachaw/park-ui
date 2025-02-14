import { avatarAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'full',
      borderWidth: '1px',
      flexShrink: 0,
    },
    fallback: {
      alignItems: 'center',
      background: 'bg.subtle',
      color: 'fg.default',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
      _hidden: {
        display: 'none',
      },
    },
    image: {
      objectFit: 'cover',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: {
        root: {
          height: '8',
          width: '8',
        },
        image: {
          height: '8',
          width: '8',
        },
        fallback: {
          textStyle: 'xs',
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      sm: {
        root: {
          height: '9',
          width: '9',
        },
        image: {
          height: '9',
          width: '9',
        },
        fallback: {
          textStyle: 'sm',
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        root: {
          height: '10',
          width: '10',
        },
        image: {
          height: '10',
          width: '10',
        },
        fallback: {
          textStyle: 'md',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        root: {
          height: '11',
          width: '11',
        },
        image: {
          height: '11',
          width: '11',
        },
        fallback: {
          textStyle: 'lg',
          '& svg': {
            width: '6',
            height: '6',
          },
        },
      },
      xl: {
        root: {
          height: '12',
          width: '12',
        },
        image: {
          height: '12',
          width: '12',
        },
        fallback: {
          textStyle: 'xl',
          '& svg': {
            width: '7',
            height: '7',
          },
        },
      },
      '2xl': {
        root: {
          height: '16',
          width: '16',
        },
        image: {
          height: '16',
          width: '16',
        },
        fallback: {
          textStyle: '2xl',
          '& svg': {
            width: '8',
            height: '8',
          },
        },
      },
    },
  },
})
