import {
  Text,
  Box,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { DesktopSubNavProps } from "../../interfaces/interface";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

const DesktopSubNav = ({
  parentMenu,
  sublabel,
  description,
}: DesktopSubNavProps) => {
  const trimmedSublabel = sublabel.toLocaleLowerCase().replace(/ +/g, "");

  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    navigate(`/product/${parentMenu}/${sublabel}`);
  };

  return (
    <Box
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
    >
      <NavLink
        to={`/product/${parentMenu}/${trimmedSublabel}`}
        onClick={handleNavLinkClick}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "teal.400" }}
              fontWeight={500}
            >
              {sublabel}
            </Text>
            <Text fontSize={"sm"}>{description}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </NavLink>
    </Box>
  );
};

export default DesktopSubNav;
