import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import cursor from "../../assets/images/cursor.png";
import SideBar from "../SideBar";
import { RiDeleteBin7Fill } from "react-icons/ri";
const Users = () => {
  
  const users=[
    {
      _id:"@3sjkdjjd",
      name:"Shahid",
      email:"shahid@gmail.com",
      role:"Admin",
      subscription:{
        status:"active",
      }
    },
    {
      _id:"@3sjkdjjd",
      name:"Shahid",
      email:"shahid@gmail.com",
      role:"Admin",
      subscription:{
        status:"active",
      }
    },
    {
      _id:"@3sjkdjjd",
      name:"Shahid",
      email:"shahid@gmail.com",
      role:"Admin",
      subscription:{
        status:"active",
      }
    },
    {
      _id:"@3sjkdjjd",
      name:"Shahid",
      email:"shahid@gmail.com",
      role:"Admin",
      subscription:{
        status:"active",
      }
    },
  ]
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "1fr", "5fr 1fr"]}
    >
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="Create Course"
          my={4}
          textAlign={["center", "center", "left"]}
        />
        <TableContainer
         
          w={["100vw", "100vw", "full"]}
        >
          <Table variant={"simple"}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((item) => (
                <Row key={item._id} item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <SideBar />
    </Grid>
  );
};

function Row({item}) {
  const changeRoleHandler=(id)=>{
    console.log(id);
  }
  const deleteHandler = (id) => {
    console.log(id);
  };
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            onClick={() => changeRoleHandler(item._id)}
            variant={"outline"}
            color={"purple.500"}
          >
            Change Role
          </Button>
          <Button onClick={() => deleteHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default Users;
