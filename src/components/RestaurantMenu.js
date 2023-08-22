import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCard from './RestaurantCard';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {


    const {resId}=useParams();
    const restaurantInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState();



    const resMenuCategories=restaurantInfo?.cards.find(x=>x.groupedCard)?.
                                        groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>{
            return (
                res?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
        })


  return (
    <>
    {restaurantInfo ? (
        <div className='w-10/12 my-2 mx-auto'>
        <div className='w-10/12 h-auto p-3 mx-auto my-2 border-b-2 border-dashed flex justify-around'>
            <div className='m-3 p-3' >
                <h2 className='text-2xl font-bold my-2'>{restaurantInfo.cards[0].card.card.info.name}</h2>
                <p className='text-sm'>{restaurantInfo.cards[0].card.card.info.cuisines.join(",")}</p>
                <p className='text-xs'>{restaurantInfo.cards[0].card.card.info.areaName},{restaurantInfo.cards[0].card.card.info.city}</p>
                <p className='my-4 font-semibold'>{restaurantInfo.cards[0].card.card.info.costForTwoMessage} 🍽</p>
            </div>
            <div className='m-3 p-3 '>
                <p className='border border-gray-200 rounded-lg p-2 m-2 text-sm'>⭐ {restaurantInfo.cards[0].card.card.info.avgRating}</p>
                <p className='border border-gray-200 p-2 rounded-lg m-2 text-xs'>{restaurantInfo.cards[0].card.card.info.totalRatingsString}</p>
            </div>
        </div>
        {/* Restaurant Menu Category Element */}
        <div className='w-8/12 mx-auto my-2 flex flex-col'>
            {resMenuCategories.map((resCategory,index)=>{
                return(
                    <RestaurantCategory resCategory={resCategory} key={resCategory.card.card.title} showItems={index===showIndex ? true :false} setShowIndex={()=>index===showIndex ? setShowIndex() : setShowIndex(index)} />
                )
            })}
            </div>
        
    </div>
    ):<Shimmer/>}
    
    </>
    
  )
}

export default RestaurantMenu
