import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Home from "../pages/Main/Home/Home";
import Products from "../pages/Main/Products/Products";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from '../pages/Main/NotFound/NotFound'
import LoginM from "../pages/Main/Login/LoginM";

import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard'
import Add from "../pages/Admin/Add";
import Login from "../pages/Admin/Login";

export const ROUTES = [
  //Main Root - user side
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
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
      },
      {
        path: '/login',
        element: <LoginM />
      },
      {
        path: '*',
        element: <NotFound />
      },
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
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
];