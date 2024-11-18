import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = (id) => {
    console.log(id," added to the Playlist");
  };
  const categories = [
    "Web Development",
    "Data Structures & Algorithms",
    "Data Science",
    "Mobile App Development",
    "Web 3.0",
    "Cloud Computing",
    "Artificial Intelligence",
  ];
  return (
    <Container  maxW="container.lg" paddingY={8} >
      <Heading
        children="All Courses"
        textAlign={"center"}
        fontSize={["4xl", "4xl", "6xl"]}
        textTransform={"uppercase"}
        m={[8, 6, 2]}
      />
      <Input
        onChange={(e) => setKeywords(e.target.value)}
        focusBorderColor="yellow.500"
        placeholder="Search a course..."
        type="text"
        outline={"none"}
      />
      <HStack
        overflowX={"auto"}
        py={8}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((course, index) => (
          <Button minW={60} key={index} onClick={() => setCategory(course)}>
            <Text children={course} />
          </Button>
        ))}
      </HStack>
      <Stack direction={["column", "row"]} justifyContent={"center"} flexWrap={"wrap"} >
        <Course
          imgSrc={
            "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          }
          title="sample 1"
          description="lorem ipsum dolor sit amet, consectetur adip lorm dolor  djjd iijd akwnn al ajka wpo aoksdak apdldjk apeddk qaowiw a ejoeoe j qapoejkek ejjjej weqpwakd "
          creatorName={"Shahid"}
          lectureCount={5}
          viewsCount={20}
          addToPlaylistHandler={addToPlaylistHandler}
          id={1}
        />
        
      </Stack>
    </Container>
  );
};

const Course = ({
  id,
  imgSrc,
  title,
  description,
  creatorName,
  lectureCount,
  viewsCount,
  addToPlaylistHandler,
}) => (
  <>
    <Stack className="course" rounded={"md"} m={"5"}>
      <VStack alignItems={"start"} p={"5"}>
        <Image
          src={imgSrc}
          objectFit={"contain"}
          width={"60"}
          rounded={"md"}
          marginBottom={"4"}
        />
        <Heading
          textAlign={["left", "center"]}
          textTransform={"uppercase"}
          fontFamily={"sans-serif"}
          children={title}
          size={"sm"}
          noOfLines={"3"}
        />
        <Text
          children={description}
          width={"60"}
          noOfLines={2}
          fontFamily={"sans-serif"}
        />
        <HStack>
          <Text fontSize={"sm"} children="CREATOR" fontWeight={"bold"} />
          <Text
            children={creatorName}
            textTransform={"uppercase"}
            fontFamily={"body"}
            fontSize={"sm"}
          />
        </HStack>
        <Text
          fontSize={"xs"}
          children={`LECTURES - ${lectureCount}`}
          fontWeight={"bold"}
        />
        <Text
          fontSize={"xs"}
          children={`VIEWS - ${viewsCount}`}
          fontWeight={"bold"}
        />
        <HStack w={"60"}>
          <Link to={`/course/${id}`} >
          <Button colorScheme="yellow">Watch Now</Button>
          </Link>
          <Button onClick={()=>addToPlaylistHandler(id)} colorScheme="red" variant={"outline"}>
            Add to Playlist
          </Button>
        </HStack>
      </VStack>
    </Stack>
  </>
);

export default Courses;
