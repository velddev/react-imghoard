import React, { Component, useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { useInfiniteQuery, useQuery } from "react-query";
import Link from "next/link";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Waypoint } from "react-waypoint";

export const FallbackImage = ({ src, fallbackSrc, ...rest }) => {
  const [actualSrc, setSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  const onError = () => {
    if (!errored) {
      setSrc(fallbackSrc);
      setErrored(true);
    }
  };

  return <img src={actualSrc} onError={onError} {...rest} />;
};

interface Image {
  id: string;
  tags: string[];
  url: string;
}

interface Props {
  image: Image;
}

export const Card = ({ image }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex background="blackAlpha.100" _hover={{ bg: "blackAlpha.200" }}>
        <Img
          onClick={onOpen}
          h="240px"
          objectFit="cover"
          src={image.url}
          borderRadius="md"
          w="100%"
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc isCentered>
        <ModalOverlay />
        <ModalBody>
          <ModalContent>
            <Img w="100%" src={image.url} borderRadius="md" />
            <Box>
              {image.tags.map((x) => (
                <Tag as="span" mr="2">
                  {x}
                </Tag>
              ))}
            </Box>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export const ImageList = () => {
  const fetchProjects = ({ pageParam = 0 }) =>
    fetch("https://api.miki.bot/images?page=" + pageParam).then((res) =>
      res.json()
    );

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    "projects",
    fetchProjects,
    {
      getNextPageParam: (lastPage, pages) => Math.floor(pages?.length),
    }
  );

  return (
    <>
      <SimpleGrid templateColumns="1fr 1fr 1fr 1fr" gap="2">
        {data?.pages.flat().map((x) => (
          <Card image={x} />
        ))}
        <Waypoint
          onEnter={() => {
            console.log("pog");
            fetchNextPage();
          }}
        />
        <Button w="full" p="4">
          Load more
        </Button>
      </SimpleGrid>
      {isFetching && <Spinner />}
    </>
  );
};

export default ImageList;
