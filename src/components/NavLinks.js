import React from 'react'
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const NavLinks = () => {
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items)
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
            <Link to="/cart">Cart 🛒{cartItems.length==0 ? (""):(cartItems.length)} </Link>
        </li>
        {/*<li className='m-4 p-5 hover:text-orange-600'>
            {loggedInUser}
  </li>*/}
        <li className='m-4 p-6 text-sm'>
            {onlineStatus ? "Online 🟢": "Offline 🔴"}
        </li>
    
    </>
  )
}

export default NavLinks;
