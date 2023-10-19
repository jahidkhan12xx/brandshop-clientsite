import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../components/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/myCart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:()=>fetch("https://server-gnlpgh0dw-jahidkhan12xx.vercel.app/cart/")
            },
            {
                path:"/brand/:id",
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader:()=> fetch('https://server-gnlpgh0dw-jahidkhan12xx.vercel.app/products/')
            },
            {
                path:"/details/:id",
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://server-gnlpgh0dw-jahidkhan12xx.vercel.app/products/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=> fetch(`https://server-gnlpgh0dw-jahidkhan12xx.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default Router;