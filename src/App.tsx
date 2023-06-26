import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import './App.css';
import { selectIsLoggedIn } from './redux/authSliceRedux/authSlice';
import { useAppSelector } from './redux/store';

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

const ProtectedRoute = ({
	component: Component,
}: {
	component: JSX.Element;
}) => {
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	return isLoggedIn ? <Navigate to="/" /> : Component;
};

const mainRoutes = [
	{
		path: '/',
		element: (
			<Suspense fallback={<LazySuspense />}>
				<LazyRoot />
			</Suspense>
		),
		children: [
			{
				path: '/',
				element: <LazyHome />,
			},
			{
				path: '*',
				element: <LazyPageNotFound />,
			},
			{
				path: '/products/:id',
				element: <LazyProductDetails />,
			},
			{
				path: '/wishlist',
				element: <LazyWishlist />,
			},
			{
				path: '/cart',
				element: <LazyCartCheckout />,
			},
			{
				path: '/search-products',
				element: <LazySearchedProducts />,
			},
			{
				path: '/address',
				element: <LazyAddress />,
			},
			{
				path: '/payment',
				element: <LazyPayment />,
			},
			{
				path: '/success',
				element: <LazyPurchaseSuccess />,
			},
			{
				path: '/orders',
				element: <LazyOrderPage />,
			},
			{
				path: '/order/:id',
				element: <LazyOrderDetails />,
			},
		],
	},
];

const authRoutes = [
	{
		path: '/login',
		element: (
			<Suspense fallback={<LazySuspense />}>
				<ProtectedRoute component={<LazyLogin />} />
			</Suspense>
		),
	},
	{
		path: '/signup',
		element: (
			<Suspense fallback={<LazySuspense />}>
				<ProtectedRoute component={<LazySignup />} />
			</Suspense>
		),
	},
];

const router = createBrowserRouter([...mainRoutes, ...authRoutes]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
