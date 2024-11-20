import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <Container h={"83.7vh"}>
      <VStack justifyContent={"center"} h={"full"} spacing={4} pb={"16"}>
        <Heading my={8} textAlign={"center"}>
          Payment Fail
        </Heading>
        <RiErrorWarningFill size={"5rem"} />
        <Link to={"/subscribe"}>
          <Button variant={"ghost"}>Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
