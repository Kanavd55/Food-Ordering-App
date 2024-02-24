import React,{useState} from 'react'
import ItemDetails from './ItemDetails';

const RestaurantCategory = (props) => {

    const {title,itemCards}=props.resCategory?.card?.card;


  return (
    <div className='border-l shadow-lg my-2 bg-gray-100'>
        <div onClick={props.setShowIndex} className='flex justify-between cursor-pointer items-center p-4 rounded-md m-2 '>
        <div>
            <p className='font-bold text-lg'> {title}-({itemCards?.length})</p>
        </div>
        <div>
            <button>🔻</button>
        </div>
    </div>
    <div className='flex flex-col'>
       {props.showItems && <ItemDetails itemCards={itemCards} />} 
    </div>
    </div>
    
  )
}

export default RestaurantCategory;
