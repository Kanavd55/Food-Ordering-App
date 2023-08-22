import React, { useEffect, useState } from 'react'
import {  RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import LoadingBar from 'react-top-loading-bar'
import BodyHeader from './BodyHeader';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Offline from './Offline';

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState();
    const [filteredList,setFilteredList]=useState();
    const [progress, setProgress] = useState(0)
    const [searchText,setSearchText]=useState("");
    const onlineStatus=useOnlineStatus();

    useEffect(()=>{
        fetchRestaurantList();
    },[])

    const fetchRestaurantList=async ()=>{
      try{
        const data=await fetch(RES_URL);
        setProgress(50);
        const json=await data.json();

        async function checkJsonData(jsonData){
          for(let i=0;i<jsonData?.data?.cards.length;i++){
            let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if(checkData!==undefined){
              return checkData;
            }
          }
        }

        const resData=await checkJsonData(json);

        setListOfRestaurant(resData);
        setFilteredList(resData);
        setProgress(100);

      }catch(e){
        console.log(e);
      }
        
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
        setSearchText("");
        return (setFilteredList());
      }
      setFilteredList(filter);
      setSearchText("");
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
    <>
    {onlineStatus ? (
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
        <div className='flex justify-between flex-wrap shadow-md rounded-lg'>
          <div className='p-2 m-2 w-72 flex justify-start rounded-lg  bg-green-400'>
            <input type='text' placeholder='Restaurant or Cuisine' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='bg-transparent font-semibold active:border-none m-1 p-2'/>
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
              <div className='flex flex-wrap justify-start  '>
                  {filteredList?.map((restaurant)=>{
                      return (
                      <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                  )})}
               </div>
          </>
        ):<NotFound/> }
    </div>):(<Shimmer/>)}
      </>
    ):<Offline/>}
    
    </>
    
  )
}

export default Body
