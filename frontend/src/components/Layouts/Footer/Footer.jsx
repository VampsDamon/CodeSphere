import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import {CiFacebook} from "react-icons/ci"
import { FaGithub ,FaLinkedin } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const Footer = () => {
  return (
    <Box  p={"4"}  padding={4} background={"blackAlpha.900"}>
      <Stack direction={["column","row"]} justifyContent={"space-between"} alignItems={"center"}  >
        <VStack alignItems={["center","start"]}>
          <Heading
            color={"white"}
            fontSize={["large", "xl", "4xl"]}
            children={"All Rights Reserved"}
            p={1}
          />
          <Text
            p={1}
            fontWeight={"bold"}
            children="@Shahid_Vk18"
            color={"yellow.200"}
          />
        </VStack>
        <HStack color={"white"} fontSize={["2xl","2xl","4xl"]} gap={6}>
          <a
            target="_blank"
            href="https://vampsdamon.github.io/PortfolioShahid_khan"
          >
            <CgProfile />
          </a>
          <a target="_blank" href="https://github.com/VampsDamon">
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-shahid-khan-1a471b153/"
          >
            <FaLinkedin />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Footer