import React from 'react'
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const NavLinks = () => {
    const onlineStatus=useOnlineStatus();
  return (
    <>
        <li className='m-4 p-5 hover:text-orange-600'>
            <Link to="/">Home</Link>
        </li>
        <li className='m-4 p-5 hover:text-orange-600'>
            <Link to="/about">About Us</Link>
        </li>
        <li className='m-4 p-5 hover:text-orange-600'>
            <Link to="/grocery">Grocery</Link>
        </li>
        <li className='m-4 p-5 hover:text-orange-600'>
            <Link to="/">Cart 🛒 </Link>
        </li>
        <li className='m-4 p-6 text-sm'>
            {onlineStatus ? "Online 🟢": "Offline 🔴"}
        </li>
    
    </>
  )
}

export default NavLinks;
