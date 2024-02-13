import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  // Your custom theme overrides here
  colors: {
    brand: {
      100: '#E0F4FF',
      900: '#000033',
    },
    header: {
        100: "#39A7FF",
        900: "#000000",
    },
    card: {
      100: "#87C4FF"
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bgGradient: props.colorMode === 'light'
          ? 'linear(to-b, facebook.400, orange.500)' // Light mode gradient
          : 'linear(to-b, black, orange.600)', // Dark mode gradient
      },
    }),
  },
});

export default customTheme;