import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RequestCourse = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container py={16}>
      <VStack>
        <Heading children="Request New Course" />
        <form onSubmit={(e) => submitHandler(e)} style={{ width: "100%" }}>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              type={"text"}
              id="name"
              value={name}
              placeholder="abc"
              focusBorderColor="yellow.500"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              type={"text"}
              id="course"
              value={message}
              placeholder="Enter the Course ...."
              focusBorderColor="yellow.500"
              onChange={(e) => setMessage(e.target.value)}
              height={40}
            />
          </Box>
          <Box my={4}>
            <VStack alignItems={"start"} spacing={6}>
              <Button type="submit" colorScheme={"yellow"} variant={"solid"}>
                Send Email
              </Button>
              <Text>
                See available Courses!{" "}
                <Link to="/courses">
                  <Button colorScheme="yellow" variant={"link"}>
                    Click
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

export default RequestCourse;
