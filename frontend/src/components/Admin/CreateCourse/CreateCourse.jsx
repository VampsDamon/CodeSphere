import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import cursor from "../../assets/images/cursor.png";
import SideBar from "../SideBar";
import { fileUploadCSS } from "../../auth/Register";

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [category, setCategory] = useState('');
   const categories = [
     "Web Development",
     "Data Structures & Algorithms",
     "Data Science",
     "Mobile App Development",
     "Web 3.0",
     "Cloud Computing",
     "Artificial Intelligence",
   ];
   const changeImageHandler = (e) => {
     const file = e.target.files[0];
     console.log(file);
     const reader = new FileReader();
     reader.readAsDataURL(file);

     reader.onloadend = () => {
       setImagePrev(reader.result);
       setImage(file);
       console.log(imagePrev);
     };
   };
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "1fr", "5fr 1fr"]}
    >
      <Container minH={"100vh"} py={4}>
        <form>
          <Heading
            textTransform={"uppercase"}
            children="Create Course"
            my={4}
            textAlign={["center", "center", "left"]}
          />
          <VStack spacing={2}>
            <Input
              required
              type={"text"}
              value={title}
              my={4}
              placeholder="Title"
              focusBorderColor="#6B46C1"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              required
              type={"text"}
              value={description}
              my={4}
              placeholder="Description"
              focusBorderColor="#6B46C1"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              required
              type={"text"}
              value={createdBy}
              my={4}
              placeholder="Creator Name"
              focusBorderColor="#6B46C1"
              onChange={(e) => setCreatedBy(e.target.value)}
            />
            <Select focusBorderColor="#6B46C1">
              <option>Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>

            <Input
              mt={8}
              required
              accept="image/*"
              type={"file"}
              id="file"
              focusBorderColor="#6B46C1"
              variant={"outline"}
              onChange={(e) => changeImageHandler(e)}
              css={{
                "&::file-selector-button": {
                  ...fileUploadCSS,
                  color: "purple",
                },
              }}
            />
            {
              imagePrev && <Image src={imagePrev} objectFit={'contain'}  boxSize={64}  />
            }
            <Button mt={8} w={'full'} colorScheme="purple" >Create</Button>
          </VStack>
        </form>
      </Container>
      <SideBar />
    </Grid>
  );
};

export default CreateCourse;
