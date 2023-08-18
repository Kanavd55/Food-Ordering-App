import React, { useEffect, useState } from 'react'
import { CDN_URL, RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState([]);

    useEffect(()=>{
        fetchRestaurantList();
    },[])

    const fetchRestaurantList=async ()=>{
        const data=await fetch(RES_URL);
        const json=await data.json();
        const restaurants=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        setListOfRestaurant(restaurants);
    }
    

  return listOfRestaurant.length===0 ? (<Shimmer/>) : (
    <div className='flex flex-wrap justify-start w-10/12 mx-auto'>
      {listOfRestaurant.map((restaurant)=>{
      return (<RestaurantCard resData={restaurant}/>)
      })}
    </div>
  )
}

export default Body
