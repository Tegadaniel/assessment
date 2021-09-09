import React from "react";
import {
  Heading,
  Flex,
} from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#FFFFFF"
      color="white"
      boxShadow="sm"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Chakra UI
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
