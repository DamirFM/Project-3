import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const About = () => {
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );

  return (
    <Container maxW="container" bgGradient={bgGradient} py={{ base: '12', md: '24' }} >
      <Box textAlign="center" fontFamily="'Roboto Condensed', sans-serif">
        <Heading
          as="h1"
          size="xl"
          fontSize="6xl"
          fontWeight="bold"
          mb="10"
          textShadow='2px 2px #ff0000'
          fontFamily="'Protest Revolution', sans-serif"
          color={useColorModeValue('orange.500', 'orange.500')}
        >
          Vulcan's Computer Emporium
        </Heading>
        <Text fontSize="xl" color={textColor} mb="6" m={35}>
        Welcome, esteemed denizens of the digital realm, to Vulcan's Computer Emporium, a sanctuary where the divine craftsmanship 
        of high-end computing meets the mortal quest for unparalleled performance. Here, within the hallowed halls of our emporium, 
        we bestow upon thee, the chosen few, the means to harness the very essence of computation and digital creation.
        </Text>
        <Divider borderColor={dividerColor} mb="6" />
        <Text fontSize="lg" textAlign="justify" color={textColor} m={35}>
        In the beginning, there was chaos in the universe of technology, a realm filled with devices unworthy of the tasks demanded 
        by the gods. Then, from the fiery depths of innovation and mastery, Vulcan himself, the god of fire, metalworking, and 
        craftsmanship, envisioned a sanctuary. A place where only the most exalted laptops and desktops would rise from the anvil, 
        forged with the precision of divine hands, destined to meet the needs of those who dare to dream, create, and conquer.
        </Text>
        <Text fontSize="lg"  textAlign="justify" color={textColor} mt="4" m={35}>
        Behold, our pantheon of machines! Each laptop and desktop is a testament to Vulcan's prowess, imbued with the power to 
        transcend mortal limitations. These are not mere tools but extensions of thy own will and creativity, designed to elevate 
        thy endeavors to the realm of the gods. From the fervent gamer seeking to dominate their digital coliseums to the visionary 
        artist crafting worlds from the ether, our creations are the vessels through which your ambitions shall be realized.
        </Text>
        <Divider borderColor={dividerColor} my="6" />
        <Text fontSize="lg"  textAlign="justify" color={textColor} m={35}>
        Venture further into our emporium, and thou shalt discover the sacred archives of storage—hard drives capable of holding 
        the vast knowledge of the ages, ensuring that not a byte of thy divine inspiration is ever lost to the sands of time. 
        Monitors, too, stand as windows into the soul of creation, offering views so crisp and vibrant that they rival the very 
        vistas of Mount Olympus.
        </Text>
        <Text fontSize="lg"  textAlign="justify" color={textColor} mt="4" m={35}>
        Yet, what is a deity without their accoutrements? Our assortment of accessories is forged to complement and elevate thy 
        computing experience. Here, you will find the finest peripherals, each designed to augment your interactions with the 
        digital world, ensuring that every command is met with precision and grace.
        </Text>
        <Divider borderColor={dividerColor} my="6" />
        <Text fontSize="lg"  textAlign="justify" color={textColor} m={35}>
        To dwell within Vulcan's Computer Emporium is to engage in a covenant with excellence. Our commitment to thee is unwavering, 
        for each device we offer has been chosen with the discernment of the gods. Support and guidance, too, are but a whisper away, 
        for our acolytes stand ready to assist you in navigating this vast digital cosmos.
        </Text>
        <Text fontSize="lg"  textAlign="justify" color={textColor} mt="4" m={35}>
        Let it be known that Vulcan's Computer Emporium is more than a mere marketplace. It is a beacon for those who seek to push 
        the boundaries of what is possible, a gathering place for the aspirants of greatness. Here, amidst the echelons of divine 
        technology, you are invited to forge your legacy.

        Embrace the call to greatness. Let Vulcan's Computer Emporium be the anvil upon which your digital dreams are shaped. For 
        in our realm, you are not mere mortals shopping for technology; you are architects of the future, wielding the power of the 
        gods to create, inspire, and transcend. <br></br>
        <br></br>

        Welcome, and may your journey through our emporium lead you to your destiny.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
