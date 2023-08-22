import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemDetails = (props) => {

    const itemCards=props.itemCards;
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }

  return (
    <>
    {itemCards.map((c)=>{
        return(
            <div key={c.card.info.id} className='flex flex-wrap md:flex-nowrap justify-between border-b border-slate-300 m-2 '>
            <div className='m-2 w-9/12 p-2'>
                <p className='m-1 text-xs'>{c.card.info.isVeg ? "🟩" : "🟥"}</p>
                <p className='font-semibold m-1'>{c.card.info.name}</p>
                <p className='m-1'>Rs. {(c.card.info.price || c.card.info.defaultPrice)/100}</p>
                <p className='text-gray-500 m-1 text-sm'>{c.card.info.description}</p>
            </div>
            <div className='m-2 w-6/12 md:w-2/12 text-center p-2'>
                <img className='w-full h-20 rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+c.card.info.imageId}/>
                <button onClick={()=>handleAddItem(c)} className='m-2 p-2 bg-green-500 text-sm text-white text-center rounded-lg hover:bg-green-600'>Add to cart</button>
            </div>

        </div>
        )
    })}
    </>
  )
}

export default ItemDetails
