import React, { useEffect, useState } from 'react'
import { CDN_URL, CHINESE_IMG_URL, HEALTHY_IMG_URL, IceCreams_IMG_URL, NORTH_IMG_URL, PIZZA_IMG_URL, RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import LoadingBar from 'react-top-loading-bar'

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState();
    const [filteredList,setFilteredList]=useState();
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
        setFilteredList(restaurants);
        setProgress(100);
    }

    filterTopRated=()=>{
      setProgress(30);
      setFilteredList(listOfRestaurant.filter((res)=>{
            return(res.info.avgRating>=4)
      }));
      setProgress(100);
    }

    fastDelivery=()=>{
      setProgress(30);
      setFilteredList(listOfRestaurant.filter((res)=>{
            return(res.info.sla.deliveryTime<=30);
      }));
      setProgress(100);
    }
    

  return (
    <div className='w-10/12 mx-auto'>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <p className='text-2xl font-bold mt-8 p-2'>What's on your mind</p>
        <div className='flex flex-wrap justify-between shadow-lg rounded-3xl p-4'>
          <div className="cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('burger'))
            }))
          }}>
            <img src={PIZZA_IMG_URL} className='w-32 h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Burger</p>
          </div>
          <div className="cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('north indian'))
            }))
          }}>
            <img src={NORTH_IMG_URL} className='w-32 h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>North Indian</p>
          </div>
          <div className="cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('ice cream'))
            }))
          }}>
            <img src={IceCreams_IMG_URL} className='w-32 h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Ice Cream</p>
          </div>
          <div className="cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('chinese'))
            }))
          }}>
            <img src={CHINESE_IMG_URL} className='w-32 h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Chinese</p>
          </div>
          <div className="cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('healthy food'))
            }))
          }}>
            <img src={HEALTHY_IMG_URL} className='w-32 h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Healthy Food</p>
          </div>
        </div>
        <p className='text-2xl font-bold mt-8 p-2'>Top restaurant chains in Delhi</p>
        <div className='flex justify-between shadow-lg rounded-lg'>
        <button onClick={filterTopRated} className='p-2 m-2 w-48 bg-green-400 rounded-lg font-semibold'>Ratings 4.0 ⭐</button>
        <button onClick={fastDelivery} className='p-2 m-2 w-48 bg-green-400 rounded-lg font-semibold'>Fast Delivery</button>
        <button onClick={()=>{
          setProgress(30)
          setFilteredList(listOfRestaurant);
          setProgress(100);
        }} className='p-2 m-2 w-48 bg-green-400 rounded-lg font-semibold'>All Restaurants</button>
        </div>
        <div className='flex flex-wrap justify-start '>
      {filteredList ? (filteredList?.map((restaurant)=>{
      return (<RestaurantCard resData={restaurant}/>)
      })):(<Shimmer/>)}
    </div>
    </div>
  )
}

export default Body
