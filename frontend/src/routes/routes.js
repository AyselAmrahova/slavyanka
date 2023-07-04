import Home from "../pages/Main/Home/Home";
import Products from "../pages/Main/Products/Products";
import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Basket from "../pages/Main/Basket/Basket";
import ProductDetails from './../pages/Main/Products/ProductDetails';
import LoginM from "../pages/Main/Login/LoginM";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound/NotFound"

import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard'
import NewAcc from "../pages/Main/Login/NewAcc";
import Login from "../pages/Admin/Login/Login";
import AddImage from './../pages/Admin/Multer/AddImage';
import Users from "../pages/Admin/Users/Users";
import ContactAdmin from '../pages/Admin/ContactAdmin/ContactAdmin'
import EditContact from "../pages/Admin/ContactAdmin/EditContact";
import Categories from "../pages/Admin/Categories/Categories";
import EditCategory from "../pages/Admin/Categories/EditCategory";
import ProductsAdmin from "../pages/Admin/ProductsAdmin/ProductsAdmin";
import EditProduct from "../pages/Admin/ProductsAdmin/EditProduct";
import Cards from "../pages/Admin/Cards/Cards";
import EditCard from "../pages/Admin/Cards/EditCard";
// import ForgetPassword from "../pages/Main/Login/ForgetPassword";



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
      {
        path: '*',
        element: <NotFound />
      }
      // {
      //   path: '/forget-password',
      //   element: <ForgetPassword />
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
        path: 'products',
        element: <ProductsAdmin />,
      },
      {
        path: 'products/edit/:id',
        element: <EditProduct />
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'cards',
        element: <Cards />,
      },
      {
        path: 'cards/edit/:id',
        element: <EditCard />,
      },
      {
        path: 'imagees',
        element: <AddImage />,
      },
    ],
  },
];