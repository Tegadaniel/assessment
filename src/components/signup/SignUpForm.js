import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Checkbox,
} from "@chakra-ui/react";

export default function SignUpForm() {
  return (
    <Box
      width="455px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      border="1px"
      rounded="10px"
      borderColor="gray.300"
      mt="20px"
      backgroundColor="0px 0px 20px #0000000A"
      height="600px"
      opacity="1"
      cursor="pointer"
      mx="77px"
      my="60px"
      display="block"
      ml="auto"
      mr="auto"
    >
      <Flex width="full" textAlign="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center" mt="10px">
            <Heading as="h6" fontSize="2xl">Create an account</Heading>
            <Text color="#525252" fontSize="md">Create an account to continue</Text>
          </Box>
        </Box>
      </Flex>
      <Flex>
      <Box 
      my={4}
      ml ="auto"
      mr="auto"
      display="inline-block"
      >
            <form>
              <FormControl>
                <FormLabel textColor="#626262">Email</FormLabel>
                <Input backgroundColor="whitesmoke"  type="email" placeholder="youremail@emailprovider.com" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel textColor="#626262">Password</FormLabel>
                <Input backgroundColor="whitesmoke" type="password" placeholder="***********" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel textColor="#626262">Confrim Password</FormLabel>
                <Input backgroundColor="whitesmoke" type="password" placeholder="***********" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel textColor="#626262">Select Currency</FormLabel>
                <Input backgroundColor="whitesmoke" type="text" placeholder="United States Dollar (USD)" />
              </FormControl>
              <Checkbox name="Terms" mt={8}>
                <Text color="#626262" fontSize="xs">I accept these terms and conditions</Text>
              </Checkbox>
              <Button 
              width="full" 
              mt={4}
              height="48px"
              backgroundColor="#2994FF" 
              type="submit">
                <Text color="white">Get Started</Text>
              </Button>
            </form>
          </Box>
          </Flex>
    </Box>
  );
}
