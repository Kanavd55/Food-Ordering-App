import React from "react"
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Shimmer from "./src/components/Shimmer";
import Footer from "./src/components/Footer";

const AppLayout=()=>{
    return(
        <div>
            <Navbar/>
            <Shimmer/>
            <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);