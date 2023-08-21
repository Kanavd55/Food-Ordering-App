import React,{useState,useEffect} from 'react';
import { RESTAURANT_MENU_API_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchRestaurantInfo();
    },[])

    const fetchRestaurantInfo=async ()=>{
        const data=await fetch(RESTAURANT_MENU_API_URL+resId);
        const json=await data.json();
        json ? (setResInfo(json)) :setResInfo(null);
    }

    return resInfo;
}

export default useRestaurantMenu
