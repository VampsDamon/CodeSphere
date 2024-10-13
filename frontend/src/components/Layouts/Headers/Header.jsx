import React, { useState } from "react";
import ColorModeSwitcher from "../../../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LinkButton=({url="/",title="home"})=>{
  return (
    <Link to={url}>
      <Button  variant={"ghost"}>{title}</Button>
    </Link>
  );
}


const Header = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme="yellow"
        width={10}
        height={10}
        rounded={"full"}
        position={"fixed"}
        top={6}
        left={6}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        size={"xs"}
      >
        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={"extrabold"}
            borderBottomWidth={"1px"}
          >
            COURSE SPHERE
          </DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack alignItems={"flex-start"} spacing={4}>
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request a Course" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About Us" />
              <HStack
                position={"absolute"}
                bottom={"2rem"}
                justifyContent={"space-evenly"}
                alignContent={"center"}
                w={"80%"}
              >
                {isAuthenticated ? (
                  <>
                  
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/login">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
