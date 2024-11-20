import { Box, Button, Container, FormLabel, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

  return (
    <Container py={16}>
      <VStack>
        <Heading children="Contact Us" />
        <form onSubmit={(e) => submitHandler(e)} style={{ width: "100%" }}>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              type={"text"}
              id="name"
              value={email}
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
            <FormLabel htmlFor="course" children="Message" />
            <Textarea
              required
              type={"text"}
              id="course"
              value={course}
              placeholder="Enter your Message ...."
              focusBorderColor="yellow.500"
              onChange={(e) => setCourse(e.target.value)}
              height={40}
            />
          </Box>
          <Box my={4}>
            <VStack alignItems={"start"} spacing={6}>
             
              <Button type="submit" colorScheme={"yellow"} variant={"solid"}>
                Send Email
              </Button>
              <Text>
                Request for a course?{" "}
                <Link to="/requestCourse">
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
}

export default Contact