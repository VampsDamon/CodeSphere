import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <Container px={16} py={24} minH={"83.6vh"}>
      <Heading
        textTransform={"uppercase"}
        textAlign={["center", "center", "left"]}
      >
        Change Password
      </Heading>
      <VStack mt={16}>
        <form>
          <Input
            required
            type={"password"}
            id="password"
            value={oldPassword}
            my={4}
            placeholder="Old Password  "
            focusBorderColor="#ECC94B"
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <Input
            required
            type={"password"}
            id="password"
            value={newPassword}
            my={4}
            placeholder="New Password"
            focusBorderColor="#ECC94B"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="submit" w={"full"} my={4} colorScheme="yellow">
            Change
          </Button>
        </form>
      </VStack>
    </Container>
  );
}

export default ChangePassword;