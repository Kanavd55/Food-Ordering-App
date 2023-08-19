import React from "react";
import {LOGO_URL}  from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-pink-50 w-full h-32 flex justify-between p-2 shadow-lg mb-4">
        <div>
            <img className="w-28" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex font-light text-xl">
                <li className="m-4 p-5  hover:text-orange-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="m-4 p-5  hover:text-orange-600">
                <Link to="/about">About Us</Link>
                </li>
                <li className="m-4 p-5  hover:text-orange-600">
                <Link to="/grocery">Grocery</Link> 
                </li>
                <li className="m-4 p-5  hover:text-orange-600">
                <Link to="/careers">Careers</Link>
                </li>
                <li className="m-4 p-5 hover:text-orange-600">
                    <Link to="/cart" >🛒 Cart</Link> 
                </li>
            </ul>
        </div>    
    </div>
  )
}

export default Navbar;
