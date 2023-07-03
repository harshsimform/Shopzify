import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import './App.css';
import { selectIsLoggedIn } from './redux/authSliceRedux/authSlice';
import { useAppSelector } from './redux/store';
import {
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
} from './index';

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
			{
				path: '/product/:parentMenu/:sublabel?',
				element: <LazyNavProducts />,
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
