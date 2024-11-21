import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <Container px={16} py={24} minH={"83.6vh"}>
      <Heading
        textTransform={"uppercase"}
        textAlign={["center", "center", "left"]}
      >
       Update Profile
      </Heading>
      <VStack mt={12}>
        <form>
          <Input
            required
            type={"text"}
            id="password"
            value={name}
            my={4}
            placeholder="Name"
            focusBorderColor="#ECC94B"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            required
            type={"email"}
            id="password"
            value={email}
            my={4}
            placeholder="Email"
            focusBorderColor="#ECC94B"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" w={"full"} my={4} colorScheme="yellow">
            Update
          </Button>
        </form>
      </VStack>
    </Container>
  );
};

export default UpdateProfile;
