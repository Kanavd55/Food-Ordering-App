import React from "react"
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Careers from "./src/components/Careers";
import Grocery from "./src/components/Grocery";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout=()=>{
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
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
                element:<About/>
            },
            {
                path:"/careers",
                element:<Careers/>
            },
            {
                path:"/grocery",
                element:<Grocery/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);