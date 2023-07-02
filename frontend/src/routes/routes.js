import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Home from "../pages/Main/Home/Home";
import Products from "../pages/Main/Products/Products";
import MainRoot from "../pages/Main/MainRoot";
import ProductDetails from './../pages/Main/Products/ProductDetails';
// import NotFound from '../pages/Main/NotFound/NotFound'

import LoginM from "../pages/Main/Login/LoginM";
import NewAcc from "../pages/Main/Login/NewAcc";
import ForgetPassword from "../pages/Main/Login/ForgetPassword";
// import Users from './../pages/Main/Login/Users';
import Basket from "../pages/Main/Basket/Basket";

import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard'
import Login from "../pages/Admin/Login/Login";
import AddImage from './../pages/Admin/Multer/AddImage';
import ContactAdmin from '../pages/Admin/ContactAdmin/ContactAdmin'
import Categories from "../pages/Admin/Categories/Categories";
import Users from "../pages/Admin/Users/Users";
import ProductsAdmin from "../pages/Admin/ProductsAdmin/ProductsAdmin";
import EditProduct from "../pages/Admin/ProductsAdmin/EditProduct/EditProduct";

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
        path: '/forget-password',
        element: <ForgetPassword />
      },
      {
        path: '/new-account',
        element: <NewAcc />
      },
      // {
      //   path: '/users',
      //   element: <Users />
      // },
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/basket',
        element: <Basket />
      },
      // {
      //   path: '*',
      //   element: <NotFound />
      // },
    ],
  },
  //Admin Root - admin side
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'contact',
        element: <ContactAdmin />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products',
        element: <ProductsAdmin />,
      },
      {
        path: 'imagees',
        element: <AddImage />,
      },
      {
        path: 'products/edit/:id',
        element: <EditProduct />
      },
    ],
  },
];