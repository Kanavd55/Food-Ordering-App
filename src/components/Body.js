import React, { useEffect, useState } from 'react'
import { CDN_URL, RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import LoadingBar from 'react-top-loading-bar'

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState();
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        fetchRestaurantList();
    },[])

    const fetchRestaurantList=async ()=>{
        setProgress(20);
        const data=await fetch(RES_URL);
        setProgress(50);
        const json=await data.json();
        setProgress(80);
        const restaurants=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
        setProgress(100);
    }
    

  return (
    <div className='w-10/12 mx-auto'>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <p className='text-2xl font-bold mt-8 p-2'>Top restaurant chains in Delhi</p>
        <div className='flex flex-wrap justify-start '>
      {listOfRestaurant ? (listOfRestaurant?.map((restaurant)=>{
      return (<RestaurantCard resData={restaurant}/>)
      })):(<Shimmer/>)}
    </div>
    </div>
  )
}

export default Body
