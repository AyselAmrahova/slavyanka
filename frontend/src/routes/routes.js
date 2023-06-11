import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Root from "../pages/Root";


export const ROUTES = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
            path: "/about",
            element: <About />,
          },
        {
            path: "/contact",
            element: <Contact />,
        }
      ],
    },
  ];