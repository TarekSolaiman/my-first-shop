import About from "../component/About/About";
import Cart from "../component/Cart/Cart";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Main from "../component/Main/Main";
import Shop from "../component/Shop/Shop";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch("products.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("products.json"),
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
