// Main page
import Home from "../pages/Main/Home/Home";
import Products from "../pages/Main/Products/Products";
import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Basket from "../pages/Main/Basket/Basket";
import ProductDetails from './../pages/Main/Products/ProductDetails';

// Root
import MainRoot from "../pages/Main/MainRoot";
import AdminRoot from '../pages/Admin/AdminRoot'

// Login/Register - Main
import LoginM from "../pages/Main/Login/LoginM";
import NewAcc from "../pages/Main/Login/NewAcc";
import ForgetPassword from "../pages/Main/Login/ForgetPassword";
// Login - Admin
import Login from "../pages/Admin/Login/Login";

// Admin page
import Dashboard from '../pages/Admin/Dashboard'
// Multer
import AddImage from './../pages/Admin/Multer/AddImage';
import Users from "../pages/Admin/Users/Users";
// Contact - put delete post get-all
import ContactAdmin from '../pages/Admin/ContactAdmin/ContactAdmin'
import EditContact from "../pages/Admin/ContactAdmin/EditContact";
// Category - put delete post get-all
import Categories from "../pages/Admin/Categories/Categories";
import EditCategory from "../pages/Admin/Categories/EditCategory";
// Product - (put) delete post get-all
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
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/basket',
        element: <Basket />
      },
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
        path: 'contact/edit/:id',
        element: <EditContact />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/edit/:id',
        element: <EditCategory />
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