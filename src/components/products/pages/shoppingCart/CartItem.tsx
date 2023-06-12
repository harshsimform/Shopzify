import {
  Button,
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { ProductFormValues } from "../../../../interfaces/interface";

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  quantity: number;
  price: string;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};

export const CartItem = (props: ProductFormValues) => {
  const {
    _id,
    image,
    name,
    discountedPrice,
    originalPrice,
    description,
    quantity,
    displaySection,
    gender,
    category,
  } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      borderWidth="1px"
      borderRadius="lg"
    >
      <CartProductMeta name={name} description={description} image={image} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        {/* <QuantitySelect value={quantity} /> */}
        <div className="custom-number-input w-32 border-2 rounded-xl">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
            <Button
              data-action="decrement"
              className=" bg-gray-100 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </Button>
            <input
              type="number"
              className="focus:outline-none bg-transparent text-center w-full  font-semibold text-md  md:text-base cursor-default flex items-center outline-none"
              name="custom-input-number"
              value={quantity}
            ></input>
            <Button
              data-action="increment"
              className="bg-gray-100 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </Button>
          </div>
        </div>
        <PriceTag price={discountedPrice} />
        <CloseButton aria-label={`Delete ${name} from cart`} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
        p="1"
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {/* <QuantitySelect value={quantity} /> */}
        <div className="custom-number-input h-10 w-32">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value="0"
            ></input>
            <button
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <PriceTag price={discountedPrice}></PriceTag>
      </Flex>
    </Flex>
  );
};
