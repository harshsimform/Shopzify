import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { isLoggedOut } from "../../../redux/authSliceRedux/authSlice";
import { useAppDispatch } from "../../../redux/store";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandle = async () => {
    // try {
    //   await axios.post("http://localhost:3000/auth/logout", {
    //     credentials: "include",
    //   });
    // } catch (error) {
    //   console.error("Logout failed:", error);
    // }
    navigate("/login");
    dispatch(isLoggedOut());
  };
  return (
    <>
      <NavLink to="/login">
        <Button
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"teal.400"}
          _hover={{
            bg: "teal.300",
          }}
          onClick={logoutHandle}
        >
          Logout
        </Button>
      </NavLink>
    </>
  );
};

export default Logout;
