import { Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const hoverColor = useColorModeValue("teal.500", "teal.400");

  return (
    <NavLink to={to}>
      <Text
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: hoverColor,
        }}
      >
        {children}
      </Text>
    </NavLink>
  );
};

export default StyledNavLink;
