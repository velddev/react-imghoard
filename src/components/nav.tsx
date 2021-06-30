import { Img } from "@chakra-ui/image";
import { Flex, Link } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";

const Nav = () => (
  <Flex w="full" my="4" justify="space-between" align="center">
    <Box>
      <Img h="32px" className="logo" src="../static/logo.png" />
    </Box>
    <Link>Upload</Link>
  </Flex>
);

export default Nav;
