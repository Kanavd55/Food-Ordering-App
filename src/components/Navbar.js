import React from "react";
import { LOGO_URL } from "../../utils/constants";

const Navbar = () => {
  return (
    <div className="bg-pink-50 w-full h-32 flex justify-between p-2 shadow-lg mb-4">
        <div>
            <img className="w-28" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex font-light text-xl">
                <li className="m-4 p-5">
                    Home
                </li>
                <li className="m-4 p-5">
                    About Us
                </li>
                <li className="m-4 p-5">
                    Grocery Mart
                </li>
                <li className="m-4 p-5">
                    🔎 Search
                </li>
                <li className="m-4 p-5">
                    🛒 Cart 
                </li>
            </ul>
        </div>    
    </div>
  )
}

export default Navbar;
