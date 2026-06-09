import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import CategoriesTab from "./components/CategoriesTab";
import CartPage from "./pages/CartPage";
import Account from "./pages/Account";
import SuccessPage from "./pages/SuccessPage";
import CheckOutPage from "./pages/CheckOutPage";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Address from "./pages/Address";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories",
        element: (
          <div>
            <CategoriesTab />
            <Products />
          </div>
        ),
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about us",
        element: <AboutUs />,
      },
      {
        path: "contact us",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckOutPage />,
      },
      {
        path: "address",
        element: <Address />,
      },
    ],
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "orderSuccess",
    element: <SuccessPage />,
  },
]);

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
