import React from 'react';
import { useColorMode, useColorModeValue, Switch, FormControl, FormLabel, Flex } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // Define text colors for light and dark modes
  const textColor = useColorModeValue('gray.50', 'white'); // Example: gray.800 for light mode, white for dark mode

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="color-mode-switch" mb="0" color={textColor}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </FormLabel>
      <Switch id="color-mode-switch" isChecked={isDark} onChange={toggleColorMode} />
    </FormControl>
  );
};

export default ColorModeSwitcher;
