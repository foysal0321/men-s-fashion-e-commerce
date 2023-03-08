import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Allproducts from "../components/allProducts/Allproducts";
import Details from "../components/allProducts/productDetails/Details";
import HomeCetagori from "../components/cetegori/HomeCetagori";
import Contact from "../components/contact/Contact";
import Addproduct from "../components/Dashboard/AddProduct/Addproduct";
import Allbuyer from "../components/Dashboard/Allbuyer/Allbuyer";
import Allseller from "../components/Dashboard/AllSeller/Allseller";
import Allusers from "../components/Dashboard/Allusers/Allusers";
import MainDash from "../components/Dashboard/MainDash";
import Myorder from "../components/Dashboard/Myorder/Myorder";
import Payment from "../components/Dashboard/Myorder/Payment";
import MyProducts from "../components/Dashboard/MyProducts/MyProducts";
import Home from "../components/Home/Home";
import UseAdmin from "../hooks/UseAdmin";
import LogIn from "../Log/LogIn/LogIn";
import SignUp from "../Log/SignUp/SignUp";
import Main from "../lyout/Main";
import AdminRout from "./AdminRout";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: 'page not pound',
        element: <Home />
    },
    {
        path: '/',
        errorElement: 'page not pound',
        element: <Main />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/products',
                element: <HomeCetagori />
            },
            {
                path:'/cetegori/:cetegori',
                element: <PrivetRout> <Allproducts /> </PrivetRout>,
                loader: ({params})=> fetch(`http://localhost:5000/cetegori/${params.cetegori}`)
            },
            {
                path:'/cetegori/:cetegori/:id',
                element: <PrivetRout> <Details /> </PrivetRout> ,
                loader: ({params})=> fetch(`http://localhost:5000/cetegori/${params.cetegori}/${params.id}`)
            },
            {
                path:'/signup',
                element: <SignUp />
            },
            {
                path:'/login',
                element: <LogIn />
            },
            
        ]
    },
    {
        path:'/dashboard',
        element: <PrivetRout> <MainDash /> </PrivetRout> ,
        errorElement: 'not found',
        children: [
            {
                path:'/dashboard',
                element: <Myorder />
            },
            {
                path: '/dashboard/addproduct',
                element: <Addproduct />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRout> <Allseller /> </AdminRout> 
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRout> <Allbuyer /></AdminRout>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRout> <Allusers /> </AdminRout>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            }
            
        ]
    }
])
