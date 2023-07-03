import { lazy } from 'react';

const LazyRoot = lazy(() => import('./components/pages/RootComponent'));
const LazySuspense = lazy(() => import('./components/pages/SuspenseLoading'));
const LazyHome = lazy(() => import('./components/pages/Home'));
const LazyPageNotFound = lazy(() => import('./components/pages/PageNotFound'));
const LazyProductDetails = lazy(
	() => import('./components/products/pages/ProductDetails')
);
const LazyWishlist = lazy(
	() => import('./components/products/pages/WishlistItem')
);
const LazyCartCheckout = lazy(
	() => import('./components/products/pages/CartCheckout')
);
const LazyLogin = lazy(() => import('./components/pages/authentication/Login'));
const LazySignup = lazy(
	() => import('./components/pages/authentication/Signup')
);
const LazySearchedProducts = lazy(
	() => import('./components/secondaryNavbar/SearchedProducts')
);
const LazyAddress = lazy(
	() => import('./components/products/pages/checkoutPages/Address')
);
const LazyPayment = lazy(
	() => import('./components/products/pages/checkoutPages/Payment')
);
const LazyPurchaseSuccess = lazy(
	() => import('./components/products/pages/checkoutPages/PurchaseSuccess')
);
const LazyOrderPage = lazy(
	() => import('./components/products/pages/orderPage/OrderPage')
);
const LazyOrderDetails = lazy(
	() => import('./components/products/pages/orderPage/OrderDetails')
);
const LazyNavProducts = lazy(() => import('./components/pages/NavProducts'));

export {
	LazyRoot,
	LazySuspense,
	LazyHome,
	LazyPageNotFound,
	LazyProductDetails,
	LazyWishlist,
	LazyCartCheckout,
	LazyLogin,
	LazySignup,
	LazySearchedProducts,
	LazyAddress,
	LazyPayment,
	LazyPurchaseSuccess,
	LazyOrderPage,
	LazyOrderDetails,
	LazyNavProducts,
};
