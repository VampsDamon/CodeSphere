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

const ResetPassword = () => {
  const [email, setEmail] = useState();
  return (
    <Container h={"90vh"} py={16}>
      <form action="">
        <Heading
          textAlign={["center", "center", "left", "left"]}
          textTransform={"uppercase"}
          children="Reset Password"
          my={16}
        />
        <VStack spacing={8}>
          <Input
            required
            type={"email"}
            id="email"
            value={email}
            placeholder="abc@gmail.com"
            focusBorderColor="yellow.500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" w={"full"} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
