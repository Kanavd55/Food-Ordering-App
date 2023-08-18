import React from "react"
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";

const AppLayout=()=>{
    return(
        <div>
            <Navbar/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);