import React from 'react';
import { Box, Button, color, Input, Flex, Text, Icon, FormControl } from '@chakra-ui/react';
import './signUp.css';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';


function SignUpForm() {
  return (

  <Box className="signup-container">
  <Box className="image-container">
    <img
      src="/WhatsApp Image 2023-09-09 at 17.20.26.jpeg"
      alt="Imagen"
      style={{ width: '150%', height: '150%'}}
    />
  </Box>

      <Box className="form-container">
        <Text marginBottom="20px" as="h1" fontWeight="bold">Sign Up</Text>
        
        <form>
          <FormControl marginBottom="16px"
          >
            <Input bg="whitesmoke" type="email" placeholder="Email or Phone" />
          </FormControl>
          <FormControl marginBottom="16px" 

          >
            <Input bg="whitesmoke" type="text" placeholder="Full Name" />
          </FormControl>
          <FormControl marginBottom="16px" 
          >
            <Input bg="whitesmoke" type="password" placeholder="Password" />
          </FormControl>
          <Button
            bg="black"
            color="white"
            size="lg"
            width="100%"
            marginTop="2"
          >
            Sign Up
          </Button>
          <div className="divider my-4">
            <div className="line"></div>
            <p className="text-center fw-bold mx-3 mb-0 text-muted"> If feeling lazy?</p>
            <div className="line"></div>
          </div>



         <Flex justifyContent="space-between">

            <Button
              colorScheme="facebook"
              size="lg"
              leftIcon={<FaFacebook />}
              flex="1" // Ocupa el espacio disponible en el Flex
              marginTop="15"
            >
              Facebook
            </Button>
            <Button
              colorScheme="twitter"
              size="lg"
              leftIcon={<FaGoogle />}
              flex="1" // Ocupa el espacio disponible en el Flex
              marginTop="15"
            >
              Google
            </Button>

          </Flex>
          <div style={{ marginTop: '20px' }}>
  <p className="mb-0">
    Already have an account?{' '}
    <a href="#!" className="text-white-50">
      <strong>Sign Up</strong>
    </a>
  </p>
</div>

        </form>
      </Box>
    </Box >
  );
}

export default SignUpForm;