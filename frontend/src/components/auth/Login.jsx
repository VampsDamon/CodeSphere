import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitHandler=(e)=>{
    e.preventDefault();
    alert(password)
    setEmail("")
    setPassword("")
  }
  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={10}>
        <Heading mt={6} children="Welcome to CourseBundler" />
        <form onSubmit={(e) => submitHandler(e)} style={{ width: "100%" }}>
          <Box my={4}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              type={"email"}
              id="email"
              value={email}
              placeholder="abc@gmail.com"
              focusBorderColor="yellow.500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              type={"password"}
              id="password"
              value={password}
              placeholder="*********"
              focusBorderColor="yellow.500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <VStack alignItems={"start"} spacing={6}>
              <Link to={"/forgetPassword"}>
                <Button variant={"link"}>Forget Password?</Button>
              </Link>
              <Button type="submit" colorScheme={"yellow"} variant={"solid"}>
                Login
              </Button>
              <Text>
                New User?{" "}
                <Link to="/register">
                  <Button colorScheme="yellow" variant={"link"}>
                    Sign Up
                  </Button>
                </Link>{" "}
                here
              </Text>
            </VStack>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default LogIn;
