import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ChangePhotoBox from "./ChangePhotoBox";

const Profile = () => {
 
 const [imagPrev,setImagPrev]=useState('');
 const removeFromPlaylistHandler=(id)=>{
   console.log(id);
   
 }
  
  const {isOpen,onClose,onOpen}= useDisclosure();
  
  const changeImageSubmitHandler=(e,image,imagePrev)=>{
    e.preventDefault();
    setImagPrev(imagePrev);
    onClose();
  }



  const user = {
    name: "Shahid Khan",
    Email: "shahidseran786@gmail.com",
    CreatedAt: new Date().toISOString(),
    role:'user',
    subscription:{
        status:undefined
    },
    playlist:[
        {
            course:"hhsash",
            poster:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
        }
    ]
  };
  return (
    <Container minH={"95vh"} maxW={"container.lg"} py={8}>
      <Heading m={8} size={"2xl"} textTransform={"uppercase"}>
        Profile
      </Heading>
      <Stack
        m={8}
        direction={["column", "row"]}
        spacing={12}
        alignItems={"center"}
      >
        <VStack spacing={4}>
          <Avatar src={imagPrev} size={"2xl"} />
          <Button onClick={onOpen} colorScheme="yellow" variant={"ghost"}>
            Change Photo
          </Button>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <HStack>
            <Text fontWeight={"bold"} size={"sm"}>
              Name
            </Text>
            <Text opacity={0.9}>{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"} size={"sm"}>
              Email
            </Text>
            <Text opacity={0.9}>{user.Email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"} size={"sm"}>
              CreatedAt
            </Text>
            <Text opacity={0.9}>{user.CreatedAt.split("T")[0]}</Text>
          </HStack>

          {user.role !== "admin" && (
            <HStack>
              <Text fontWeight={"bold"} size={"sm"}>
                Subscription
              </Text>
              {user.subscription.status === "active" ? (
                <Button variant={"ghost"} color={"yellow.500"}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={"/subscribe"}>
                  <Button colorScheme="yellow" variant={"ghost"}>
                    Subscribe
                  </Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={"row"} alignItems={"center"}>
            <Link to={"/updateProfile"}>
              <Button w={40}>Update Profile</Button>
            </Link>
            <Link to={"/changePassword"}>
              <Button w={40}>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size={"md"} p={8} my={8}>
        Playlist
      </Heading>
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "column", "row"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          p={4}
        >
          {user.playlist.map((element, index) => (
            <VStack
              boxShadow={"md"}
              p={2}
              spacing={4}
              w={48}
              m={2}
              key={element.course}
            >
              <Image
                boxSize={"full"}
                objectFit={"contain"}
                src={element.poster}
                rounded={"md"}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={"ghost"} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;
