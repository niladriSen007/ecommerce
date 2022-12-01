import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProductList from './pages/productList/ProductList'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Register from './pages/Register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
import Error from './pages/Error/Error'
import Cart from './pages/Cart/Cart'
import AllProducts from './pages/AllProducts/AllProducts'
import Navbar from './components/Navbar/Navbar'
import Advertisement from './components/Advertisement/Advertisement'
import Branding from './components/Branding/Branding'
import Footer from './components/Footer/Footer'
import Success from './pages/success/Success'
import { useSelector } from 'react-redux'

const App = () => {
  

  const user = useSelector(state=>state.user.currentUser)
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element:  <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/productList/:category",
      element: <ProductList />,
    },
    {
      path: "/productList/all",
      element: <AllProducts />,
    },
    {
      path: "/productsPage/:id",
      element: <ProductsPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App