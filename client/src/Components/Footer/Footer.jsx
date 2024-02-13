import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import GitHubButton from 'react-github-btn';

function Footer() {
  return (
    <Box as="footer" textAlign="center" bg="gray.800" p={4} color="gray.100">
      <Flex justifyContent="center" alignItems="center">
        <Box fontSize="lg"> Made by Damir, Anthony, and Wesley | </Box>
        <GitHubButton 
          href="https://github.com/DamirFM/Project-3" 
          data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_dimmed;" 
          data-size="large" 
          aria-label="Follow @buttons on GitHub">
          GitHub Repo
        </GitHubButton>
      </Flex>
    </Box>
  );
}

export default Footer;
