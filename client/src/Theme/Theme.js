import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  // Your custom theme overrides here
  colors: {
    brand: {
      100: '#99AAFF',
      900: '#000033',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default customTheme;