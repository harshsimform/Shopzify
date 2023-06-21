import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Center h="100vh">
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl">
          404 Not Found
        </Heading>
        <Text>Oops! The page you are looking for does not exist.</Text>
        <Button onClick={goBack}>Go Back</Button>
      </VStack>
    </Center>
  );
};

export default PageNotFound;
