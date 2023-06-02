import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const LazyRoot = lazy(() => import("./components/pages/Root"));
const LazyHome = lazy(() => import("./components/pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyRoot />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHome />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
