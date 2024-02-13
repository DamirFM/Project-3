import React from 'react';
import { Box, Button, Flex, Container, useColorModeValue, Link, IconButton, Text } from '@chakra-ui/react';
import GitHubButton from 'react-github-btn';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  const bgColor = useColorModeValue('orange.500', 'orange.600');
  const textColor = useColorModeValue('gray.50', 'gray.100');
  return (
    <Box bg={bgColor} color={textColor}  py={5}>
      <Container maxWidth="container.xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Text fontSize="lg">Made by Damir, Anthony, and Wesley</Text>
        <Link href="https://github.com/DamirFM/Project-3" isExternal>
          <IconButton
            aria-label="GitHub link"
            icon={<FaGithub />}
            size="lg"
            colorScheme="blue"
            variant="ghost"
            mt={2}
          />
        </Link>
        {/* Include any additional footer information here */}
      </Container>
    </Box>
  );
}

export default Footer;
