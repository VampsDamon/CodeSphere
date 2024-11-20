import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileInfo = () => {
  return (
    <Stack
      spacing={8}
      m={4}
      p={4}
      direction={["column", "column", "row"]}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px"}
      borderColor={ {base: "white", _dark: "black"} }
      rounded={"lg"}
      boxShadow={"lg"}
    >
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/91468616"
          boxSize={[36, 28]}
        />
        <Text children='Co-Founder' opacity={0.7}/>
      </VStack>
      <VStack
        alignItems={["center", "center", "flex-start"]}
        textAlign={["center", "center", "start"]}
      >
        <Heading children="Shahid Khan" />
        <Text children="Hi , I am a Full stack developer . Our mission is to provide quality content at resonable price " />
      </VStack>
    </Stack>
  );
}

export default ProfileInfo