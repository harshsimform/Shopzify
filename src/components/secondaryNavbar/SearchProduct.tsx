import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  useBreakpointValue,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  clearSearchInput,
  selectSearchInput,
  setSearchInput,
} from "../../redux/searchInputSliceRedux/SearchInputSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const SearchProduct = () => {
  const inputBorderColor = useColorModeValue("gray.200", "gray.600");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isScreenFixed = useBreakpointValue({ base: false, md: true });
  const searchInput = useAppSelector(selectSearchInput);
  const dispatch = useAppDispatch();

  console.log(searchInput);

  const navigate = useNavigate();
  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(clearSearchInput());
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        setIsModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = () => {
    if (searchInput !== "") {
      const trimmedInput = searchInput.replace(/\s+/g, "").toLowerCase();
      navigate("/search-products", { state: { searchInput: trimmedInput } });
      dispatch(clearSearchInput());
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput !== "") {
      e.preventDefault();
      handleSearch();
      dispatch(clearSearchInput());
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <InputGroup maxW="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          isReadOnly
          type="text"
          placeholder="Search for Products, brands and more"
          cursor={"pointer"}
          borderRadius="md"
          focusBorderColor={inputBorderColor}
          onClick={handleModalOpen}
        />
        {isScreenFixed ? (
          <InputRightElement pointerEvents="none" mr={6}>
            <Flex>
              <Kbd>ctrl</Kbd>+<Kbd>z</Kbd>
            </Flex>
          </InputRightElement>
        ) : (
          <></>
        )}
      </InputGroup>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="xl">
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalBody mx={isScreenFixed ? "" : -4}>
            <Flex>
              <InputGroup>
                {isScreenFixed ? (
                  <InputLeftElement
                    pointerEvents="none"
                    mt={isScreenFixed ? 1 : 0}
                    children={<SearchIcon fontSize={20} color="teal.500" />}
                  />
                ) : (
                  <></>
                )}
                <Input
                  type="text"
                  height={isScreenFixed ? 50 : "2.5rem"}
                  fontSize={"lg"}
                  placeholder="Search for Products, brands and more"
                  borderColor={isScreenFixed ? "transparent" : "transparent"}
                  focusBorderColor={
                    isScreenFixed ? "transparent" : "transparent"
                  }
                  bgColor={"transparent"}
                  value={searchInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
              </InputGroup>
              <IconButton
                display={isScreenFixed ? "none" : "block"}
                aria-label="Search product"
                ml={2}
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchProduct;
