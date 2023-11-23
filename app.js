import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/Contact";
import ErrorPage from "./src/components/Error";
import RestaurantInfo from "./src/components/RestaurantInfo";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import cartStore from "./src/utils/cartStore";

const Grocery = lazy(() => import("./src/components/Groceries"));

const AppLayout = () => {
  return (
    <Provider store={cartStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
