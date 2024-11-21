import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUserFill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  return (
    <VStack spacing={8} p={16} 
       boxShadow={"-2px 0px 10px rgba(107,70,193,0.5)"}
       >
      <LinkButton
        active={location.pathname === "/admin/dashboard"}
        url={"dashboard"}
        text="Dashboard"
        Icon={RiDashboardFill}
      />
      <LinkButton
        active={location.pathname === "/admin/createCourse"}
        url={"createCourse"}
        text="Create Course"
        Icon={RiAddCircleFill}
      />
      <LinkButton
        active={location.pathname === "/admin/courses"}
        url={"courses"}
        text="Courses"
        Icon={RiEyeFill}
      />
      <LinkButton
        active={location.pathname === "/admin/users"}
        url={"users"}
        text="Users"
        Icon={RiUserFill}
      />
    </VStack>
  );
};

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button fontSize={"larger"} colorScheme={active?"purple":""} variant={"ghost"}>
        <Icon style={{ margin: "4px" }} />
        {text}
      </Button>
    </Link>
  );
}

export default SideBar;
