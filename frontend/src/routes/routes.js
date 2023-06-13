import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Home from "../pages/Main/Home/Home";
import Products from "../pages/Main/Products/Products";
import MainRoot from "../pages/Main/MainRoot";

import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard'
import Add from "../pages/Admin/Add";

export const ROUTES = [
  //Main Root - user side
  {
    path: "/",
    element: <MainRoot />,
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
  //Admin Root - admin side
  {
    path: '/admin/',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'add',
        element: <Add />,
      },
    ],
  },
];