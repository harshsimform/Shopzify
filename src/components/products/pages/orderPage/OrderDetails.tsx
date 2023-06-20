import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useBreakpointValue,
  useSteps,
  Heading,
  useColorModeValue as mode,
  Text,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useGetCheckoutQuery } from "../../../../redux/apiSliceRedux/apiSlice";
import { steps } from "../../../../constants/OrderSteps";

const OrderDetails = () => {
  const isScreenFixed = useBreakpointValue({ base: false, md: true });
  const { data: checkout, isLoading, isError, error } = useGetCheckoutQuery();
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Box marginTop={isScreenFixed ? "12rem" : "2rem"} width={"90%"} mx={"auto"}>
      <Box p={5} borderWidth={1} borderRadius={"md"} my={3}>
        <Box mb={5}>
          <Heading color={mode("teal.600", "teal.400")} userSelect="none">
            Order Id
          </Heading>
          {checkout?.map((itemId) => (
            <Text fontSize={"lg"} color="gray.500" key={itemId._id}>
              #{itemId._id}
            </Text>
          ))}
        </Box>
      </Box>
      <Box p={5} borderWidth={1} borderRadius={"md"} userSelect="none">
        <Box mb={5}>
          <Heading color={mode("teal.600", "teal.400")}>Order Status</Heading>
          <Divider my={3} />
        </Box>
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="400px"
          colorScheme={"teal"}
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
      {/* <Box p={5} borderWidth={1} borderRadius={"md"} my={3}>
        <Box mb={5}>
          <Heading color={mode("teal.600", "teal.400")}>Order Details</Heading>
          <Divider my={3} />
        </Box>
         {checkout && checkout?.map((prodItem) => (
          <Flex my={3} key={prodItem._id}>
            <Image src={prodItem.cartItems.} boxSize={100} mr={2} borderRadius={4} />
            <Box>
              <Text
                fontSize="md"
                fontWeight="bold"
                mb={1}
                color={mode("teal.500", "teal.400")}
              >
                {prodItem.name}
              </Text>
              <Text fontSize="sm" mb={1} color={mode("gray.600", "gray.400")}>
                <b>Price:</b>{" "}
                {`${prodItem.discountedPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}`}
              </Text>
              <Text fontSize="sm" mb={1} color={mode("gray.600", "gray.400")}>
                <b>Quantity: </b>
                {prodItem.quantity}
              </Text>
              <Text fontSize="sm" mb={1} color={mode("gray.600", "gray.400")}>
                <b>Subtotal:</b>{" "}
                {`${prodItem.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}`}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Box p={5} borderWidth={1} borderRadius={"md"} my={3}>
        <Box mb={5}>
          <Heading color={mode("teal.600", "teal.400")}>Order Summary</Heading>
          <Divider my={3} />
        </Box>
        {checkout?.summary.map((summaryItem, ind) => (
          <Box color={mode("gray.600", "gray.400")} mt={3} key={ind}>
            <Flex my={1} fontSize={"sm"} justify="space-between">
              <Text>Total MRP</Text>
              <Text color={mode("teal.500", "teal.400")} ml={1}>
                {summaryItem.totalMrp.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </Text>
            </Flex>
            <Flex my={1} fontSize={"sm"} justify="space-between">
              <Text>Tax Charge</Text>
              <Text color={mode("teal.500", "teal.400")} ml={1}>
                +
                {summaryItem.taxCharge.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </Text>
            </Flex>
            <Flex my={1} fontSize={"sm"} justify="space-between">
              <Text>Shipping Charge</Text>
              <Text color={mode("teal.500", "teal.400")} ml={1}>
                +
                {summaryItem.shippingCharge.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </Text>
            </Flex>
            <Divider />
            <Flex my={1} fontSize={"lg"} justify="space-between">
              <Text fontWeight={"bold"}> Total Amount</Text>
              <Text color={mode("teal.500", "teal.400")} ml={1}>
                {summaryItem.totalAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
};

export default OrderDetails;
