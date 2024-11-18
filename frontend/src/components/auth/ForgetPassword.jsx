import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  const { token } = useParams();
  return (
    <Container h={"90vh"} py={16}>
      <form action="">
        <Heading
          textAlign={["center", "center", "left", "left"]}
          textTransform={"uppercase"}
          children="Forget Password"
          my={16}
        />
        <VStack spacing={8}>
          <Input
            required
            type={"password"}
            id="email"
            value={email}
            placeholder="**********"
            focusBorderColor="yellow.500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            w={"full"}
            colorScheme="yellow"
            textTransform={"uppercase"}
          >
            Forget Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
