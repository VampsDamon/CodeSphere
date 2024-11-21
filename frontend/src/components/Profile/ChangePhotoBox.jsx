import { Avatar, Button, Container, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { fileUploadCSS } from '../auth/Register'

const ChangePhotoBox = ({isOpen,onClose,changeImageSubmitHandler}) => {
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");


    const changeImage = (e) => {
        
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    };
   
    const closeHandler=()=>{
       onClose();
       setImage('');
       setImagePrev('');
    }
    
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalBody>
          <Container>
            <form
              onSubmit={(e) => changeImageSubmitHandler(e, image, imagePrev)}
            >
              <VStack spacing={8}>
                {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                <Input
                  type="file"
                  accept="image/*"
                  css={{ "&::file-selector-button": fileUploadCSS }}
                  onChange={(e) => changeImage(e)}
                />

                <Button type="submit" w={"full"} colorScheme="yellow">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler} mr={3}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ChangePhotoBox