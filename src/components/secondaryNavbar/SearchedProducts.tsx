import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  useAddToWishlistMutation,
  useGetWishlistsQuery,
  useSearchProductsQuery,
} from "../../redux/apiSliceRedux/apiSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductFormValues } from "../../interfaces/interface";
import NoSearch from "/gif/no-search.gif";

const SearchedProducts = () => {
  const cardBorderColor = useColorModeValue("gray.200", "gray.600");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const priceTextColor = useColorModeValue("gray.600", "gray.400");
  const dummyPriceTextColor = useColorModeValue("gray.400", "gray.500");
  const isScreenFixed = useBreakpointValue({ base: false, md: true });
  const toast = useToast();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { searchInput } = state as { searchInput: string };
  const [wishlistItems, setWishlistItems] = useState<ProductFormValues[]>([]);
  const {
    data: productData,
    isLoading,
    isError,
  } = useSearchProductsQuery(searchInput);
  const { data: wishlistData } = useGetWishlistsQuery();

  const [addToWishlist] = useAddToWishlistMutation();

  const handleToggleWishlist = (product: ProductFormValues) => {
    const updatedWishlistItems = wishlistItems.some(
      (item) => item._id === product._id
    )
      ? wishlistItems.filter((item) => item._id !== product._id)
      : [...wishlistItems, product];

    setWishlistItems(updatedWishlistItems);

    addToWishlist({ product })
      .unwrap()
      .then((response: any) => {
        const message = response?.message || "Something went wrong";
        toast({
          title: message,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: error.data.message,
          description: error.data.subMessage,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleProductClick = (product: ProductFormValues) => {
    navigate(`/products/${product._id}`, { state: { product } });
  };

  useEffect(() => {
    if (wishlistData) {
      setWishlistItems(wishlistData.wishlist.products);
    }
  }, [wishlistData]);

  if (isLoading) {
    return <Center marginX={4}>Loading...</Center>;
  }

  if (isError) {
    return <Center marginX={4}>Error fetching searched items</Center>;
  }

  return (
    <>
      <Box marginX={4} marginTop={isScreenFixed ? "8.3rem" : "0"}>
        {productData?.length === 0 ? (
          <Flex justifyContent="center" alignItems="center" height="75vh">
            <VStack>
              <Image
                src={NoSearch}
                boxSize={"15rem"}
                alt="No result found"
                mb={3}
              />
              <Text fontSize={"lg"} fontWeight="md">
                Please enter relevant product name or category
              </Text>
            </VStack>
          </Flex>
        ) : (
          <Box>
            <Center>
              <Heading
                my={2}
                mt={"2.5rem"}
                textAlign="center"
                className="text-teal-600"
              >
                Your Search result includes
              </Heading>
            </Center>
            <Flex
              justifyContent="center"
              flexWrap="wrap"
              alignItems="left"
              mb={10}
            >
              {productData?.map((product) => {
                const isWishlisted =
                  wishlistData &&
                  wishlistData?.wishlist.products.some(
                    (item) => item.productId === product._id
                  );
                return (
                  <Box
                    key={product._id}
                    className="relative max-w-md rounded-3xl p-2 mt-[2rem]"
                    border={1}
                    borderStyle="solid"
                    bgColor={cardBgColor}
                    borderColor={cardBorderColor}
                    mx={2}
                  >
                    <div
                      className="overflow-x-hidden rounded-2xl relative cursor-pointer"
                      style={{ userSelect: "none" }}
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        className="h-[15rem] w-[20rem] rounded-2xl object-cover"
                        src={product.image}
                      />
                      <Box className="absolute left-2 top-1 rounded-full">
                        <Badge
                          rounded="full"
                          px="2"
                          fontSize="0.8em"
                          colorScheme="red"
                          color="red.500"
                          bgColor="red.100"
                        >
                          New
                        </Badge>
                      </Box>
                    </div>
                    <div className="mt-4 pl-2 mb-2 flex justify-between">
                      <div>
                        <p
                          className="text-lg font-semibold text-teal-500 mb-0 text-left"
                          style={{ userSelect: "none" }}
                        >
                          {product.name}
                        </p>
                        <div
                          className="flex items-center"
                          style={{ userSelect: "none" }}
                        >
                          <Text className="text-lg mt-0" color={priceTextColor}>
                            Rs.{" "}
                            {Number(product.discountedPrice).toLocaleString()}
                          </Text>
                          <Text
                            className="text-md mt-0 ml-2 line-through"
                            color={dummyPriceTextColor}
                          >
                            Rs. {Number(product.originalPrice).toLocaleString()}
                          </Text>
                        </div>
                      </div>
                      <Flex
                        onClick={() => handleToggleWishlist(product)}
                        className={`heart-button flex flex-col-reverse mt-[1.8rem] mr-4 group cursor-pointer h-5 ${
                          isWishlisted ? "is-active" : ""
                        }`}
                      >
                        {isWishlisted ? (
                          <FaHeart fill="teal" fontSize={"20px"} />
                        ) : (
                          <FaRegHeart fontSize={"20px"} fill="gray" />
                        )}
                      </Flex>
                    </div>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};

export default SearchedProducts;
