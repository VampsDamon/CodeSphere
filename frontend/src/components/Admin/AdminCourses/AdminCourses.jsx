import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import cursor from "../../assets/images/cursor.png";
import SideBar from "../SideBar";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModal from "./CourseModal";
const AdminCourses = () => {
  const courses = [
    {
      _id: "@3sjkdjjd",
      title: "React Course",
      category: "Web Development",
      createdBy: "Shahid_vk18",
      poster: {
        url: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      },
      views: 123,
      numOfVideos: 12,
    },
  ];
   
  const courseDetailsHandler = () => {
    onOpen();
  };
  const deleteBtnHandler = (id) => {
    console.log(id);
  };
  const deleteLectureBtnHandler = (courseId,lectureId) => {
    console.log(courseId,lectureId);
  };
  const addLectureHandler = (e,courseId,title,description,video) => {
    e.preventDefault();
    console.log(courseId);
  };
  const {isOpen,onClose,onOpen}= useDisclosure();
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "1fr", "5fr 1fr"]}
    >
      <Box p={["0", "8"]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="Courses"
          my={4}
          textAlign={["center", "center", "left"]}
        />
        <TableContainer w={["100vw", "100vw", "full"]}>
          <Table variant={"simple"}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item) => (
                <Row
                  onOpen={onOpen}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteBtnHandler={deleteBtnHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          deleteLectureBtnHandler={deleteLectureBtnHandler}
          isOpen={isOpen}
          onClose={onClose}
          lectures={[1,2,3,4,5,6,7]}
          courseTitle="React Course"
          id={"#idisajjd"}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <SideBar />
    </Grid>
  );
};

function Row({ item, onOpen, deleteBtnHandler, courseDetailsHandler }) {
  
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            onClick={courseDetailsHandler}
            variant={"outline"}
            color={"purple.500"}
          >
            View Lectures
          </Button>
          <Button onClick={() => deleteBtnHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
