import React from 'react'

const ItemDetails = (props) => {

    const itemCards=props.itemCards;

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
            <div className='m-2 w-6/12 md:w-2/12  p-2'>
                <img className='w-full h-20 rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+c.card.info.imageId}/>
            </div>

        </div>
        )
    })}
    </>
  )
}

export default ItemDetails
