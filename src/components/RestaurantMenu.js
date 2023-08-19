import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { RESTAURANT_MENU_API_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';

const RestaurantMenu = () => {

    const [restaurantInfo,SetRestaurantInfo]=useState();
    const {resId}=useParams();


    useEffect(()=>{
        fetchRestaurantInfo();
    },[])

    const fetchRestaurantInfo=async ()=>{
        const data=await fetch(RESTAURANT_MENU_API_URL+resId);
        const json=await data.json();
        const {info}=json?.data?.cards[0]?.card?.card;
        SetRestaurantInfo(info);
        console.log(json);
    }

    if(!restaurantInfo){
        return (<Shimmer/>)
    }

    const {name,avgRating,costForTwoMessage,cuisines,totalRatingsString,areaName,city,cloudinaryImageId}=restaurantInfo;

    
  return (
    <>
    {restaurantInfo ? (
        <div className='w-10/12 my-2 mx-auto'>
        <div className='w-8/12 h-44 p-3 mx-auto my-2 border-b-2 border-dashed flex justify-between'>
            <div className='m-3 p-3' >
                <h2 className='text-2xl font-bold my-2'>{name}</h2>
                <p className='text-sm'>{cuisines.join(",")}</p>
                <p className='text-xs'>{areaName},{city}</p>
                <p className='my-4 font-semibold'>{costForTwoMessage} 🍽</p>
            </div>
            <div className='m-3 p-3 '>
                <p className='border border-gray-200 rounded-lg p-2 m-2 text-sm'>⭐ {avgRating}</p>
                <p className='border border-gray-200 p-2 rounded-lg m-2 text-xs'>{totalRatingsString}</p>
            </div>
        </div>
        
    </div>
    ):<Shimmer/>}
    
    </>
    
  )
}

export default RestaurantMenu
