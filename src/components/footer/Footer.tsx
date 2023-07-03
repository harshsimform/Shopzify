import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  useBreakpointValue,
  Input,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiFillShop } from "react-icons/ai";
import StyledNavLink from "../customComp/FooterNavLink";

const Logo = () => {
  return (
    <Flex display={"flex"} alignItems={"center"} fontSize={"2xl"}>
      <Text fontSize={24}>
        <AiFillShop />
      </Text>
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"cursive"}
        color={useColorModeValue("gray.800", "white")}
        marginX={1}
      >
        Shopzify
      </Text>
    </Flex>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const isScreenFixed = useBreakpointValue({ base: false, md: true });
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const year = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={"2rem"}
    >
      <Container as={Stack} maxW={"6xl"} pt={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Pages</ListHeader>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/wishlist">Wishlist</StyledNavLink>
            <StyledNavLink to="/cart">Cart</StyledNavLink>
            <StyledNavLink to="/orders">Orders</StyledNavLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <StyledNavLink to="/product/men">Men</StyledNavLink>
            <StyledNavLink to="/product/women">Women</StyledNavLink>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <StyledNavLink to="/product/electronics">
                <Text
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "teal.400",
                  }}
                >
                  Electronics
                </Text>
              </StyledNavLink>
              <Tag
                size={"sm"}
                bg={useColorModeValue("teal.400", "teal.700")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <StyledNavLink to="/product/home and decor">
              Home & Decor
            </StyledNavLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <StyledNavLink to="/">FaceBook</StyledNavLink>
            <StyledNavLink to="/">Instagram</StyledNavLink>
            <StyledNavLink to="/">Twitter</StyledNavLink>
            <StyledNavLink to="/">LinkedIn</StyledNavLink>
          </Stack>

          <Stack align={"flex-end"} justify="center">
            <VStack>
              <Box>
                <Flex
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={isScreenFixed ? "2xl" : "lg"}
                >
                  <Text fontSize={isScreenFixed ? "2rem" : "2xl"}>
                    <AiFillShop />
                  </Text>
                  <Text
                    fontSize={isScreenFixed ? "2rem" : "lg"}
                    fontFamily={"cursive"}
                    marginX={1}
                  >
                    Shopzify
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fontSize={"md"} textAlign={"left"}>
                  The E-Commerce platform that you can trust
                </Text>
              </Box>
            </VStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"md"} textAlign={"center"}>
          © {year} Shopzify. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
