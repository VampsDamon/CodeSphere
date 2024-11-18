import {
  Avatar,
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
export const fileUploadCSS = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white",
    outline:"none",
    "border": "none",
};

const fileUploadStyle = {
  "&::file-selector-button": fileUploadCSS,
};

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    
    alert(imagePrev);
    setEmail("");
    setPassword("");
  };
  const changeImageHandler=(e)=>{
    const file =e.target.files[0];
    console.log(file)
    const reader=new FileReader();
    reader.readAsDataURL(file);
   

    reader.onloadend=()=>{
        setImagePrev(reader.result)
        setImage(file);
        console.log(imagePrev)
    }
  }
  return (
    <Container >
      <VStack h={"full"} justifyContent={"center"} mt={10}>
        <Heading mt={6} textTransform={"uppercase"} children="Registration" />
        <form onSubmit={(e) => submitHandler(e)} style={{ width: "100%" }}>
          <Box
            my={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar size={"2xl"} src={imagePrev} />
          </Box>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              type={"password"}
              id="password"
              value={password}
              placeholder="*********"
              outline={"none"}
              border={"none"}
              focusBorderColor="yellow"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Box my={4}>
            <FormLabel htmlFor="file" children="Choose Avtar" />
            <Input
              required
              accept="image/*"
              type={"file"}
              id="file"
              focusBorderColor="yellow.500"
              variant={"outline"}
              onChange={(e) => changeImageHandler(e) }
              css={fileUploadStyle}
            />
          </Box>

          <Box my={4}>
            <VStack alignItems={"start"} spacing={6}>
              <Button type="submit" colorScheme={"yellow"} variant={"solid"}>
                Sign Up
              </Button>
              <Text>
                Already account ?{" "}
                <Link to="/login">
                  <Button colorScheme="yellow" variant={"link"}>
                    Log In
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

export default Register;
