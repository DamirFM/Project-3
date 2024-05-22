import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  // headingFontSize,
} from "@chakra-ui/react";

const About = () => {
  const textColor = useColorModeValue("white");
  const dividerColor = useColorModeValue("gray.300", "gray.600");
  const titleColor = useColorModeValue("orange.500", "orange.400");

  const bgGradient = useColorModeValue(
    "linear(to-b, facebook.400, orange.500)",
    "linear(to-b, black, orange.600)"
  );

  return (
    <Box mx="auto" py={5} bgGradient={bgGradient}>
      <Container maxW="1440px" py={5} bg="transparent">
        <Box textAlign="center" fontFamily="'Roboto Condensed', sans-serif">
          <Heading
            as="h2"
            mb={5}
       
            textAlign="center"
            fontFamily="'Metamorphous', sans-serif"
            color={titleColor}
            textShadow="2px 2px #ff0000"
          >
            Vulcan's Computer Emporium
          </Heading>

          <Text
            fontSize="lg"
            textAlign="justify"
            color={textColor}
            mt="4"
            m={35}
            fontFamily="'Metamorphous', sans-serif"
          >
            Let it be known that Vulcan's Computer Emporium is more than a mere
            marketplace. It is a beacon for those who seek to push the
            boundaries of what is possible, a gathering place for the aspirants
            of greatness. Here, amidst the echelons of divine technology, you
            are invited to forge your legacy. Embrace the call to greatness. Let
            Vulcan's Computer Emporium be the anvil upon which your digital
            dreams are shaped. For in our realm, you are not mere mortals
            shopping for technology; you are architects of the future, wielding
            the power of the gods to create, inspire, and transcend. <br></br>
            <br></br>
            Welcome, and may your journey through our emporium lead you to your
            destiny.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

