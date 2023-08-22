import React, { useState } from "react";
import {LOGO_URL, NAV_CROSS_IMG_URL, NAV_IMG_URL}  from "../utils/constants";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";


const Navbar = () => {

    const [showLinks,setShowLinks]=useState(false);

  return (
    <div className="bg-pink-50 shadow-md">
    <div className=" w-full flex justify-between p-2">
        <div className="p-1">
            <img className="w-12 md:w-28" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
             <ul className="hidden md:flex font-light text-sm md:text-xl">
             <NavLinks/>
             </ul>
        </div>
        <div className="md:hidden p-2 w-12">
            <button onClick={()=>setShowLinks(!showLinks)}>
                {showLinks ?(<img src={NAV_CROSS_IMG_URL}/>):(<img src={NAV_IMG_URL}/>)}
            </button>
        </div>  
    </div>
    { showLinks ? (
        <ul className="font-light text-center w-full text-sm">
        <NavLinks/>
        </ul>
    ):("")}
    </div>
  )
}

export default Navbar;
