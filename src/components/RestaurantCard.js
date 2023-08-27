import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {

  console.log(props);

    const {name,costForTwo,avgRating,cuisines,cloudinaryImageId}=props.resData.info;

  return (
    <div className='w-64 m-3 mx-7 sm:mx-3 my-6 p-3 rounded-xl hover:bg-yellow-200 border-gray-100 border-2 cursor-pointer'>
        <img className='w-full h-56 rounded-lg' src={CDN_URL+""+cloudinaryImageId}/>
        <div className='my-3 rounded-lg text-gray-800 font-bold'>{name}</div>
        <div className='my-1 rounded-lg font-semibold'>{costForTwo}</div>
        <div className='my-1 rounded-lg'>⭐ {avgRating}</div>
        <p className='my-1 rounded-lg break-words text-gray-500'>{cuisines.slice(0,3).join(",")}</p>
  </div>
  )
}

export default RestaurantCard;
