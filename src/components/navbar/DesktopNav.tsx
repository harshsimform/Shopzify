import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductData } from "../../interfaces/interface";
import {
  useGetMenuItemsQuery,
  useSearchNavProductsQuery,
} from "../../redux/apiSliceRedux/apiSlice";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.700");
  const popoverBorderColor = useColorModeValue("gray.200", "gray.600");
  const [parentMenu, setParentMenu] = useState("");

  const { data: navItems } = useGetMenuItemsQuery();

  const { data: searchData } = useSearchNavProductsQuery({
    menu: parentMenu,
  });

  const handleNavLinkClick = (menu: string) => {
    setParentMenu(menu);
    const products: ProductData[] | undefined = searchData?.products;
    console.log(products);
  };

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems?.map((navItem) => (
        <Box key={navItem._id}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <NavLink
              key={navItem._id}
              to={`/${navItem.menu.toLowerCase()}`}
              onClick={() => handleNavLinkClick(navItem.menu)}
            >
              <PopoverTrigger>
                <Text
                  p={1}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "teal.400",
                  }}
                >
                  {navItem.menu}
                </Text>
              </PopoverTrigger>
            </NavLink>
            {navItem.subMenus.length > 0 && navItem.subMenus && (
              <PopoverContent
                border={1}
                borderStyle={"solid"}
                borderColor={popoverBorderColor}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.subMenus.map((child) => (
                    <DesktopSubNav
                      key={child._id}
                      parentMenu={navItem.menu.toLowerCase()}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
