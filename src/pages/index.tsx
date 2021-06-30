import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import ImageList from "../components/imageListing";
import "../styles/style.scss";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/layout";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Container, Flex, Text } from "@chakra-ui/react";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Container maxW="container.lg">
      <Nav />
      <Box>
        <Box my="8">
          <InputGroup>
            <Input type="text" placeholder="search for tags" />
          </InputGroup>
        </Box>

        <SimpleGrid templateColumns="1fr">
          <ImageList></ImageList>
        </SimpleGrid>
      </Box>
    </Container>
  </div>
);

export default Home;
