import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchProductsQuery } from "../../redux/apiSliceRedux/apiSlice";
import { useNavigate, useLocation } from "react-router-dom";

const SearchProduct = () => {
  const inputBg = useColorModeValue("none", "gray.600");
  const inputColor = useColorModeValue("black", "white");
  const [searchInput, setSearchInput] = useState<string>("");
  const [isSearchRequested, setIsSearchRequested] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading } = useSearchProductsQuery(searchInput, {
    skip: !isSearchRequested || searchInput === "",
  });

  const handleSearch = () => {
    if (searchInput !== "") {
      navigate("/search-products", { state: { searchInput } });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setIsSearchRequested(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (data && !isLoading) {
      navigate("/search-products", { state: { data } });
    }
  }, [data, isLoading, navigate]);

  useEffect(() => {
    setSearchInput("");
  }, [location]);

  return (
    <>
      <InputGroup maxW="md">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search Products"
          borderRadius="md"
          borderWidth={1}
          color={inputColor}
          bgColor={inputBg}
          _focus={{ borderColor: "transparent" }}
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <IconButton
          aria-label="Search database"
          ml={2}
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </InputGroup>
    </>
  );
};

export default SearchProduct;
