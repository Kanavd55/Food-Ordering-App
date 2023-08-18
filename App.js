import React from "react"
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

const AppLayout=()=>{
    return(
        <div>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);