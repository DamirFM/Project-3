import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Input, Button, VStack, SimpleGrid, Drawer, DrawerBody, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useColorModeValue,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, NumberInput, NumberInputField, NumberInputStepper,
  NumberIncrementStepper, NumberDecrementStepper, Text, Image
} from '@chakra-ui/react';
import StoreCard from './StoreCard';

const categories = [
  { _id: "65c26d9303c196854fd60ec0", name: "Laptops" },
  { _id: "65c26d9303c196854fd60ec1", name: "Desktops" },
  { _id: "65c26d9303c196854fd60ec2", name: "Monitors" },
  { _id: "65c26d9303c196854fd60ec3", name: "Hardware" },
  { _id: "65c26d9303c196854fd60ec4", name: "Accessories" },
];

const StorePage = () => {
  const inputColor = useColorModeValue('gray.50', 'gray.600');
  const drawerColor = useColorModeValue('gray.100', 'gray.800');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const titleColor = useColorModeValue('gray.900', 'orange.500');
  const modalBgColor = useColorModeValue('gray.700', 'orange.500'); 
  const modalInput = useColorModeValue('gray.100', 'gray.700'); 
  const modalTitle = useColorModeValue('gray.100', 'gray.800')

  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    <Flex direction="column" align="center" bg={bgColor}>
      <Box p="4" alignSelf="flex-start">
        <Button onClick={onDrawerOpen}>Categories</Button>
        <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen}>
          <DrawerOverlay sx={{ backgroundColor: drawerColor }} />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Categories</DrawerHeader>
            <DrawerBody>
              <VStack align="start">
                {categories.map((category) => (
                  <Button key={category._id} variant="ghost"
                          onClick={() => { setCurrentCategoryId(category._id); onDrawerClose(); }}>
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
      <SimpleGrid columns={4} spacing={4} w="full">
        {products.map((product) => (
          <Box key={product._id} onClick={() => handleOpenModal(product)} cursor="pointer">
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
              <Text mb={4} color={modalTitle}>{selectedProduct.description}</Text>
              <NumberInput bg={modalInput} defaultValue={1} min={1} onChange={(valueString) => setQuantity(parseInt(valueString))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="orange" mr={3} onClick={() => console.log(`Add ${quantity} of ${selectedProduct.name} to cart`)}>
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

export default StorePage;
