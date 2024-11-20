import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TermsAndCondition = ({ termsAndConditions }) => {
  return (
    <>
      <Heading
        size={"md"}
        children="Terms & Conditions"
        textAlign={["center", "center", "left"]}
        my={4}
      />
      <Box overflowY={"scroll"} m={4} p={4} h={"sm"}>
        <Text
          letterSpacing={"widest"}
          textAlign={["center", "center", "left"]}
          p={4}
        >
          {termsAndConditions}
        </Text>
        <Text fontWeight={'semibold'} textAlign={'left'}>Refund Only applicable for cancellation within 7 Days </Text>
      </Box>
    </>
  );
};

export default TermsAndCondition;
