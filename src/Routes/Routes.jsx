import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import CartPage from "../Pages/CartPage/CartPage";
import Profile from "../Pages/Profile/Profile";
import ProfileUser from './../Pages/Profile/ProfileUser/ProfileUser';
import Order from './../Pages/Profile/Order/Order';
import Wishlist from './../Pages/Profile/Wishlist/Wishlist';
import Details from "../Pages/Details/Details";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Category from './../Dashboard/Category/Category';
import EditForm from './../Dashboard/Category/EditForm';
import Product from './../Dashboard/Product/Product';
import AddProducts from './../Dashboard/Product/AddProducts';
import AdminUser from './../Dashboard/Users/AdminUser';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/details',
        element: <Details />
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <ProfileUser />,
          },
          {
            path: "/profile/order",
            element: <Order />,
          },
          {
            path: "/profile/wishlist",
            element: <Wishlist />,
          },
        ]
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <Signup />
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/dashboard',
        element: "Home",
      },
      {
        path: "/dashboard/category",
        element: <Category />,
      },
      {
        path: "/dashboard/editCategory/:id",
        element: <EditForm />,
      },
      {
        path: "/dashboard/product",
        element: <Product />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProducts />
      },
      {
        path: "/dashboard/users",
        element: <AdminUser />,
      },
    ]
  }
]);
