export interface Props {
  control?: string;
  label?: string;
  name: string;
  placeholder?: string;
  options?: { key: string; value: string }[];
  type?: string;
  className?: string;
}

export interface TextErrorProps {
  children?: React.ReactNode;
}

export interface IOption {
  key: string;
  value: string;
}

export interface SubNavItem {
  label: string;
  subLabel?: string;
  to: string;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<SubNavItem>;
  to?: string;
}

export interface BannerItem {
  id: number;
  bannerImg: string;
}

export interface ProductFormValues {
  _id: string;
  image: string;
  status: boolean;
  badge: string;
  name: string;
  discountedPrice: number;
  originalPrice: number;
  description: string;
  quantity: number;
  gender: string;
  category: string;
}

export interface ProductResponse {
  productDetails: ProductFormValues[];
}

export interface UserRegAuthFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export type UserLoginAuthFormValues = Pick<
  UserRegAuthFormValues,
  "email" | "password"
>;

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string;
}

// interfaces for authentication API responses
export interface LoginResponse {
  accessToken: string;
}

export interface RefreshResponse {
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface RefreshCredentials {
  refreshToken: string;
}

export interface WishlistProduct {
  _id: string;
  product: string;
  productId: string;
  category: string;
  status: boolean;
  badge: string;
  description: string;
  discountedPrice: number;
  gender: string;
  image: string;
  name: string;
  originalPrice: number;
  quantity: number;
  recordDate: Date;
}

export interface Wishlist {
  _id: string;
  userId: string;
  products: WishlistProduct[];
}

export interface WishlistRecord {
  wishlist: Wishlist;
}

export interface AddToCartProduct {
  _id: string;
  image: string;
  name: string;
  discountedPrice: number;
  productId?: string;
  originalPrice: number;
  description: string;
  gender: string;
  category: string;
  cartQty?: number;
  onClickDelete?: () => void;
}

export interface Cart {
  _id: string;
  userId: string;
  products: AddToCartProduct[];
}

export interface CartRecord {
  cart: Wishlist;
}

export interface CartProducts {
  image: string;
  name: string;
  discountedPrice: number;
  productId: string;
  cartQty: number;
  category: string;
  onClickDelete?: () => void;
}

export interface CartProduct {
  _id?: string;
  productId: string;
  quantity: number;
  discountedPrice: number;
  price: number;
  name: string;
  image: string;
}

export interface CartItemProps {
  item: {
    productId: string;
    discountedPrice: number;
    cartQty?: number;
  };
  onQuantityChange: (productId: string, newQuantity: number) => void;
}

export interface CheckoutState {
  userId?: string;
  recordDate?: string;
  cartItems: CartProduct[];
  summary: {
    totalMrp: number;
    taxCharge: number;
    shippingCharge: number;
    totalAmount: number;
  };
  address: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    state: string;
    postalCode: string;
    email: string;
    phone: string;
  };
  payment?: cardDetails[];
}

export interface AddressDetails {
  _id?: string;
  userId?: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  state: string;
  postalCode: string;
  email: string;
  phone: string;
}

export interface cardDetails {
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface GetCheckoutData {
  _id?: string;
  userId?: string;
  recordDate: string;
  status: string;
  cartItems: CartProduct[];
  summary: {
    totalMrp: number;
    taxCharge: number;
    shippingCharge: number;
    totalAmount: number;
  }[];
  address: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    state: string;
    postalCode: string;
    email: string;
    phone: string;
  }[];
  payment?: cardDetails[];
}

export interface SubMenuData {
  _id: string;
  sublabel: string;
  description: string;
}

export interface MenuItemData {
  _id: string;
  menu: string;
  subMenus: SubMenuData[];
}

export interface DesktopSubNavProps extends SubMenuData {
  parentMenu: string;
}

export interface SearchProductsResponse {
  productDetails: Product[];
}

export interface Product {
  _id: string;
  name: string;
}

export interface SearchProductsVariables {
  gender: string;
  category: string;
}

export interface SearchNavProductsParams {
  menu: string;
  sublabel: string;
}

export interface ProductData {
  _id: string;
  description: string;
  image: string;
  name: string;
  discountedPrice: number;
  originalPrice: number;
  quantity: number;
  gender: string;
  category: string;
  status: boolean;
  badge: string;
  recordDate: Date;
}

export interface SearchNavProductsResponse {
  products: ProductData[];
}
