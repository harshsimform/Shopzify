import { Stack, useColorModeValue } from "@chakra-ui/react";
import { useGetMenuItemsQuery } from "../../redux/apiSliceRedux/apiSlice";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  const { data: navItems } = useGetMenuItemsQuery();
  return (
    <Stack
      bg={useColorModeValue("white", "gray.700")}
      p={4}
      display={{ md: "none" }}
      fontWeight={600}
      userSelect="none"
    >
      {navItems?.map((navItem) => (
        <MobileNavItem
          key={navItem._id}
          subMenu={navItem.subMenus}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

export default MobileNav;
