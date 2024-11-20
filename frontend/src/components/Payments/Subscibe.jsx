import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscibe = () => {
  return (
    <Container h={"83.5vh"}  px={16} mx={'auto'}>
      <Heading w={'full'} children="Welcome" my={8} textAlign={"center"} />
      <VStack boxShadow={"lg"} alignItems={"stretch"}>
        <Box css={{ borderRadius: "8px 8px 0 0" }} bg={"yellow.400"} p={4}>
          <Text children="Pro Pack -₹299.00" />
        </Box>
        <Box p={4} textAlign={"center"}>
          <VStack spacing={10}>
            <Text children=" Join pro and get access to all Content." />
            <Heading children="₹299 Only" />
            <Button
              width={"full"}
              textTransform={"uppercase"}
              fontWeight={"semibold"}
              fontSize={"lg"}
              textAlign={"center"}
              colorScheme="yellow"
              children="Buy Now"
            />
          </VStack>
        </Box>
        <Box css={{ borderRadius: "0 0 8px 8px" }} bg={"blackAlpha.400"} p={4}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"semibold"}
            
            children="100%  Refund At Cancelation"
          />
          <Text
            fontSize={'xs'}
            
            
            children="*Terms and Conditions Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
}

export default Subscibe