import React,{useState,useEffect} from 'react';
import { RESTAURANT_MENU_API_URL } from '../utils/constants';

const useRestaurantMenu = () => {
  
    const [resInfo,setResInfo]=useState();

    useEffect(()=>{
        fetchRestaurantInfo();
    },[])

    const fetchRestaurantInfo=async ()=>{
        const data=await fetch(RESTAURANT_MENU_API_URL+resId);
        const json=await data.json();
        const {info}=json?.data?.cards[0]?.card?.card;
        setResInfo(info);
    }

    return resInfo;
}

export default useRestaurantMenu
