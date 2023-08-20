import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId}=useParams();
    const restaurantInfo=useRestaurantMenu(resId);

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
