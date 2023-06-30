export const steps = [
  { title: "Order Placed", description: "Your order has been placed" },
  { title: "Processing", description: "Your order is being processed" },
  { title: "Shipped", description: "Your order has been shipped" },
  { title: "Out for Delivery", description: "Your order is out for delivery" },
  { title: "Delivered", description: "Your order has been delivered" },
];

export const statusColors: { [key: string]: string } = {
  "Order Placed": "teal.400",
  Processing: "red.400",
  Shipped: "purple.400",
  "Out for Delivery": "orange.400",
  Delivered: "green.400",
};
