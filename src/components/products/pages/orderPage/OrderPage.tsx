import {
  Box,
  useBreakpointValue,
  Heading,
  useColorModeValue as mode,
  Text,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useGetCheckoutQuery } from "../../../../redux/apiSliceRedux/apiSlice";
import { steps } from "../../../../constants/OrderSteps";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import OrderDetails from "./OrderDetails";

const OrderPage = () => {
  const isScreenFixed = useBreakpointValue({ base: false, md: true });
  const { data: checkouts, isLoading, isError, error } = useGetCheckoutQuery();
  const isTableResponsive = useBreakpointValue({ base: false, sm: true });
  3;

  console.log(checkouts);

  return (
    <Box overflowX="auto" marginTop={isScreenFixed ? "12rem" : "2rem"}>
      <Table variant="simple" size={isTableResponsive ? "sm" : "md"}>
        <Thead>
          <Tr>
            <Th>Order Id</Th>
            <Th>Order Status</Th>
            <Th>Order Created Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {checkouts?.map((checkout) => (
            <Tr key={checkout._id}>
              <Td>{checkout._id}</Td>
              <Td>Order Received</Td>
              <Td>{checkout.recordDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <OrderDetails /> */}
    </Box>
  );
};

export default OrderPage;
