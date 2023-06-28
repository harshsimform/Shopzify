import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SubMenuData } from "../../interfaces/interface";

const MobileNavItem = ({
  subMenu,
  menu,
}: {
  subMenu: SubMenuData[];
  menu: string;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subMenu && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <NavLink to={menu}>
          <Text
            fontWeight={500}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {menu}
          </Text>
        </NavLink>
        {subMenu.length && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.600")}
          align={"start"}
          fontWeight={500}
        >
          {subMenu.map((obj) => {
            const trimmedSublabel = obj.sublabel
              .toLocaleLowerCase()
              .replace(/ +/g, "");
            return (
              <Box key={obj._id}>
                <NavLink to={`${menu}/${trimmedSublabel}`}>
                  <Text py={2}>{obj.sublabel}</Text>
                </NavLink>
              </Box>
            );
          })}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
