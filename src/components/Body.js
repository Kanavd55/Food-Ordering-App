import React, { useEffect, useState } from 'react'
import { CDN_URL, CHINESE_IMG_URL, HEALTHY_IMG_URL, IceCreams_IMG_URL, NORTH_IMG_URL, PIZZA_IMG_URL, RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import LoadingBar from 'react-top-loading-bar'
import BodyHeader from './BodyHeader';
import NotFound from './NotFound';

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState();
    const [filteredList,setFilteredList]=useState();
    const [progress, setProgress] = useState(0)
    const [searchText,setSearchText]=useState("");

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

    filterSearch=()=>{
      setProgress(30);
      const filter=listOfRestaurant.filter((res)=>{
            return(res.info.name.includes(searchText.toLowerCase()) || res.info.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase()))
      });
      if(filter.length===0){
        setProgress(100);
        return (setFilteredList());
      }
      setFilteredList(filter);
      setProgress(100);
      console.log(filteredList);
    }

    fastDelivery=()=>{
      setProgress(30);
      setFilteredList(listOfRestaurant.filter((res)=>{
            return(res.info.sla.deliveryTime<=30);
      }));
      setProgress(100);
    }
    

  return (
    <>
    {listOfRestaurant ? (<div className='w-10/12 mx-auto'>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <p className='text-2xl font-bold mt-8 p-2'>What's on your mind?</p>
        <BodyHeader listOfRestaurant={listOfRestaurant} filteredList={filteredList} setFilteredList={setFilteredList} setProgress={setProgress}/>
        <p className='text-2xl font-bold mt-8 p-2'>Search Restaurants</p>
        <div className='flex justify-between shadow-md rounded-lg'>
          <div className='p-2 m-2 w-72 flex justify-start rounded-lg  bg-green-400'>
            <input type='text' placeholder='Restaurant Name' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='bg-transparent font-semibold active:border-none m-1 p-2'/>
            <button onClick={filterSearch} className= 'w-12  rounded-full hover:bg-green-300'>🔎</button>
            </div>
        <button onClick={filterTopRated} className='p-2 m-2 w-44 bg-green-400 hover:bg-green-300 rounded-lg font-semibold'>Ratings 4.0 ⭐</button>
        <button onClick={fastDelivery} className='p-2 m-2 w-44 bg-green-400 hover:bg-green-300 rounded-lg font-semibold'>Fast Delivery</button>
        <button onClick={()=>{
          setProgress(30)
          setFilteredList(listOfRestaurant);
          setProgress(100);
        }} className='p-2 m-2 w-44 bg-green-400 hover:bg-green-300 rounded-lg font-semibold'>All Restaurants</button>
        </div>
        { filteredList ? (
          <>
          <p className='text-2xl font-bold mt-8 p-2'>Top restaurant chains in Delhi</p>
              <div className='flex flex-wrap justify-start '>
                  {filteredList?.map((restaurant)=>{
                      return (<RestaurantCard resData={restaurant} key={restaurant.info.id}/>)
                  })}
               </div>
          </>
        ):<NotFound/> }
    </div>):(<Shimmer/>)}
    </>
    
  )
}

export default Body
