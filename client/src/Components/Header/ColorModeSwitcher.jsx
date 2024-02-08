import React from 'react';
import { useColorMode, Switch, FormControl, FormLabel, Flex } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="color-mode-switch" mb="0">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </FormLabel>
      <Switch id="color-mode-switch" isChecked={isDark} onChange={toggleColorMode} />
    </FormControl>
  );
};

export default ColorModeSwitcher;
