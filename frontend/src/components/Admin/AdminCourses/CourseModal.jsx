import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill, RiDeleteBin7Line } from 'react-icons/ri';
import { fileUploadCSS } from '../../auth/Register';

const CourseModal = ({
  courseTitle,
  isOpen,
  onClose,
  id,
  deleteLectureBtnHandler,
  addLectureHandler,
  lectures,
}) => {
  // const [id, setId] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [prevVideo, setPrevVideo] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPrevVideo(reader.result);
      setVideo(file);
    };
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setPrevVideo("");
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={"full"}
      onClose={handleClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={["1fr", "1fr", "3fr 1fr"]}>
            <Box px={["0", "0", "16"]}>
              <Box my={"5"}>
                <Heading>Course Title</Heading>
                <Heading size={"sm"} opacity={0.4}>
                  {`#${id}`}
                </Heading>
              </Box>
              <Heading size={"lg"}>Lectures</Heading>
              {lectures.map((lect, index) => (
                <VideoCard
                  key={index}
                  title="React Intro"
                  description="This is the intro Video where you can learn basics of React"
                  num={index+1}
                  lectureId="#dlkdjdl"
                  courseId={id}
                  deleteButtonHandler={deleteLectureBtnHandler}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={(e) =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={4}>
                  <Heading
                    children="Add Lecture"
                    size={"md"}
                    textTransform={"uppercase"}
                  />
                  <Input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    focusBorderColor="purple.300"
                  />
                  <Input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    focusBorderColor="purple.300"
                  />
                  <Input
                    mt={8}
                    required
                    accept="video/mp4"
                    type={"file"}
                    id="file"
                    focusBorderColor="#6B46C1"
                    variant={"outline"}
                    onChange={(e) => changeVideoHandler(e)}
                    css={{
                      "&::file-selector-button": {
                        ...fileUploadCSS,
                        color: "purple",
                      },
                    }}
                  />

                  {prevVideo && (
                    <video
                      controls
                      controlsList="nodownload"
                      src={prevVideo}
                    ></video>
                  )}
                  <Button w={"full"} colorScheme="purple" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function VideoCard({
    title,
    description,
    num,
    lectureId,
    courseId,
    deleteButtonHandler
}){
  return (
    <Stack
      direction={["column", "column", "row"]}
      my={8}
      borderRadius={"lg"}
      p={4}
      boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
      justifyContent={"space-between"}
    >
      <Box>
        <Heading size={"sm"} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        w={["full", "full", "unset", "30%"]}
        color={{ base: "purple.700", _dark: "white" }}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}

export default CourseModal