import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import cursor from "../../assets/images/cursor.png";
import SideBar from "../SideBar";

const CreateCourse = () => {
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box></Box>
      <SideBar />
    </Grid>
  );
};

export default CreateCourse;