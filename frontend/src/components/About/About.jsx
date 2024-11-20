import { Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
import VidoPlayer from './VidoPlayer';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TermsAndCondition from './TermsAndCondition';
import tnc from "../assets/docs/termsAndCondition"
const About = () => {
  return (
    <Container boxShadow={"lg"} maxW={'container.lg'} p={10}>
        <Heading mb={8} children="About Us" />
        <ProfileInfo />
        <Stack 
        m={8}
        alignItems={'center'}
        direction={['column','column','row']}>
            <Text textAlign={['center','center' ,'left']}  fontFamily={'cursive'} children='We are streaming platform with some premium course  available only for premium user '/>
            <Link to="/subscribe">
            <Button variant={'ghost'} colorScheme='yellow'>Check Out Our Plan</Button>
            </Link>
        </Stack>
        <VidoPlayer/>
           
          <TermsAndCondition  termsAndConditions={tnc}  />

         <HStack>
            <RiSecurePaymentFill/>
            <Heading size={'xs'} fontFamily={'sans-serif'}
             textTransform={'uppercase'}
             children="Payment is secured by Razorpay"
            />
         </HStack>

    </Container>
  );
}

export default About