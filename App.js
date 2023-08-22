import React from "react"
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy,Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const Grocery=lazy(()=>import("./src/components/Grocery"));

const AppLayout=()=>{
    return(
        <Provider store={appStore}>
             <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
        <Toaster/>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);