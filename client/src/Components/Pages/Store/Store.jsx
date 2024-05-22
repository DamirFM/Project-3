import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  VStack,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import StoreCard from './StoreCard';
import { useCart } from '../../Context/CartContext';

const categories = [
  { _id: "65c26d9303c196854fd60ec0", name: "Laptops" },
  { _id: "65c26d9303c196854fd60ec1", name: "Desktops" },
  { _id: "65c26d9303c196854fd60ec2", name: "Monitors" },
  { _id: "65c26d9303c196854fd60ec3", name: "Hardware" },
  { _id: "65c26d9303c196854fd60ec4", name: "Accessories" },
];

const Store = () => {
  const inputColor = useColorModeValue('gray.50', 'gray.600');
  const drawerColor = useColorModeValue('gray.100', 'gray.800');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const titleColor = useColorModeValue('orange.500', 'orange.500');
  const modalBgColor = useColorModeValue('rgba(230,234,255, .7)', 'orange.800');
  const modalInput = useColorModeValue('gray.100', 'gray.500');
  const modalText = useColorModeValue('gray.900', 'gray.100');
  const modalTitle = useColorModeValue('gray.900', 'gray.100');
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)',
    'linear(to-b, black, orange.600)'
  );

  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        let data = await response.json();

        if (currentCategoryId) {
          data = data.filter(product => product.category === currentCategoryId);
        }

        if (searchTerm) {
          data = data.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        const itemsPerPage = 8;
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        const offset = (currentPage - 1) * itemsPerPage;
        data = data.slice(offset, offset + itemsPerPage);

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [currentCategoryId, searchTerm, currentPage]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onModalOpen();
  };

  return (
    <Flex direction="column" align="center" bgGradient={bgGradient} px={4} py={6}>
      <Box alignSelf="flex-start" mb={4}>
        <Button onClick={onDrawerOpen}>Categories</Button>
        <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen}>
          <DrawerOverlay />
          <DrawerContent bg={drawerColor}>
            <DrawerCloseButton />
            <DrawerHeader fontFamily="'Protest Revolution', sans-serif" fontSize="3xl" color={titleColor}>
              Categories
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start">
                {categories.map((category) => (
                  <Button key={category._id} variant="ghost" onClick={() => { setCurrentCategoryId(category._id); onDrawerClose(); }}>
                    {category.name}
                  </Button>
                ))}
                <Button variant="ghost" onClick={() => { setCurrentCategoryId(null); onDrawerClose(); }}>Show All</Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb="4" bg={inputColor} />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} w="full">
        {products.map((product) => (
          <Box key={product._id} onClick={() => handleOpenModal(product)} cursor="pointer" bg="white" p={4} borderRadius="md" boxShadow="md">
            <StoreCard {...product} />
          </Box>
        ))}
      </SimpleGrid>
      <Box my={4}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <Button
            key={page}
            mx={1}
            onClick={() => setCurrentPage(page)}
            colorScheme={page === currentPage ? "blue" : "gray"}
          >
            {page}
          </Button>
        ))}
      </Box>
      {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
          <ModalOverlay />
          <ModalContent bg={modalBgColor}>
            <ModalHeader color={modalTitle}>{selectedProduct.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProduct.image} alt={selectedProduct.name} maxW="100%" maxH="400px" objectFit="contain" />
              <Text mb={4} color={modalText}>{selectedProduct.description}</Text>
              <NumberInput bg={modalInput} defaultValue={1} min={1} onChange={(valueString) => setQuantity(parseInt(valueString))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="orange"
                mr={3}
                onClick={() => {
                  addToCart(selectedProduct, quantity);
                  onModalClose();
                }}
              >
                Add to Cart
              </Button>
              <Button variant="ghost" onClick={onModalClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default Store;
