import React, { useState } from "react";
import ColorModeSwitcher from "../../../../ColorModeSwitcher";
import { RiDashboardFill, RiLogoutBoxLine } from "react-icons/ri";
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

const LinkButton = ({ url = "/", title = "home",onClose }) => {
  return (
    <Link onClick={onClose} to={url}>
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = {
    role: "admin",
  };
  const logoutHandler=()=>{
    console.log("User logged out")
    onClose();
  }
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
        zIndex={"overlay"}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"}>
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
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/requestCourse"
                title="Request a Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />
              <LinkButton onClose={onClose} url="/abhi" title="Go to Abhishekh" />

              <HStack
                position={"absolute"}
                bottom={"2rem"}
                justifyContent={"space-evenly"}
                alignContent={"center"}
                w={"80%"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={"ghost"} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <p>OR</p>
                        <Button
                          variant={"ghost"}
                          onClick={() => {
                            onClose();
                            logoutHandler();
                          }}
                        >
                          <RiLogoutBoxLine style={{ margin: "3px" }} />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role == "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme="purple" variant={"ghost"}>
                            <RiDashboardFill style={{ margin: "3px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
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
