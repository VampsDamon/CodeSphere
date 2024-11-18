import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Center,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../assets/images/bg.png";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiUdemy, SiCoursera } from "react-icons/si";
import { DiAws } from "react-icons/di";

import introVideo from "../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column-reverse", "column-reverse", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "19", "46"]}
        >
          <VStack
            width={"full"}
            spacing={8}
            alignItems={["center", "center", "flex-end"]}
          >
            <Heading
              textAlign={["center", "center", "right"]}
              children="LEARN FROM THE EXPERTS"
              size={["xl", "2xl"]}
            />
            <Text
              textAlign={["center", "center", "right"]}
              fontFamily={"cursive"}
              children="Find  Valuable Content At Reasonable Price"
            />
            <Link to={"/courses"}>
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vectorGraphics"
            boxSize={["sm", "sm", "md"]}
            src={vg}
            objectFit={"contain"}
          />
        </Stack>
      </div>

      <Box bg="blackAlpha.800" padding={"6"}>
        <Heading
          children="OUR BRANDS"
          textAlign={"center"}
          fontFamily={"body"}
          color={"yellow.400"}
        />
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={4}
          color={"white"}
          className="brandsBanner"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="vdoContainer">
        <video
          autoPlay
          muted
          loop
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />
      </div>
    </section>
  );
};

export default Home;
