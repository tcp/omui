import { mode } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const sizes: any = {
  sm: {
    Track: {
      width: '1.375rem',
      height: '0.75rem'
    },
    Thumb: {
      width: '0.75rem',
      height: '0.75rem',
      _checked: {
        transform: 'translateX(0.625rem)'
      }
    }
  },
  md: {
    Track: {
      width: '1.875rem',
      height: '1rem'
    },
    Thumb: {
      width: '1rem',
      height: '1rem',
      _checked: {
        transform: 'translateX(0.875rem)'
      }
    }
  },
  lg: {
    Track: {
      width: '2.875rem',
      height: '1.5rem'
    },
    Thumb: {
      width: '1.5rem',
      height: '1.5rem',
      _checked: {
        transform: 'translateX(1.375rem)'
      }
    }
  }
};

// TODO: remove the 'any' type
const Switch: any = {
  defaultProps: {
    size: 'md',
    colorScheme: 'blue'
  },
  baseStyle: (props: any) => ({
    Track: {
      borderRadius: 'full',
      padding: '2px',
      transition: 'all 120ms',
      bg: mode('gray.300', 'whiteAlpha.400')(props),
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed'
      },
      _checked: {
        bg: mode(`${props.colorScheme}.500`, `${props.colorScheme}.200`)(props)
      }
    },
    Thumb: {
      bg: 'white',
      transition: 'transform 250ms',
      borderRadius: 'full',
      transform: 'translateX(0)'
    }
  }),
  sizes
};

export const SwitchSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export default Switch;
