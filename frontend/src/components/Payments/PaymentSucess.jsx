import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentSucess = () => {
  return (
    <Container h={"90.7vh"} p={16}>
      <Heading my={8} textAlign={"center"}>
        You have Pro Pack
      </Heading>
      <VStack boxShadow={"lg"} pb={"16"} borderRadius={"lg"}>
        <Box
          w={"full"}
          bgColor={"yellow.400"}
          css={{ borderRadius: "8px 8px 0 0" }}
          p={4}
        >
          <Text color={"black"}>Payment Success</Text>
        </Box>
        <Box p={4}>
          <VStack textAlign={"center"} px={8} mt={4} spacing={8}>
            <Text>
              Congratulation you are a prom member. You have access to premium
              content.
            </Text>
            <Heading size={"4xl"}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={"/profile"}>
        <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Heading fontSize={'md'}>Reference:lsdjdsjiedwhwjhe</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSucess;
