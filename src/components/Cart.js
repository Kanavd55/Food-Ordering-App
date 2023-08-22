import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart';
import { clearCart, removeItem } from '../utils/cartSlice';
import { toast } from 'react-hot-toast';


const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items);

  let Amount=0;
  if(cartItems){
    cartItems.map((item)=>{
      return(
        Amount=Amount+((item.card.info.defaultPrice/100) || (item.card.info.price/100)
      ))
    })
  }

  const dispatch=useDispatch();

  const handleRemove=(item)=>{
    dispatch(removeItem(item));
    toast("Item removed");
  }

  const handleClear=()=>{
    dispatch(clearCart());
    toast("Cart is clear")
  }

  const handleOrder=()=>{
    dispatch(clearCart());
    toast("Order Placed")
  }

  return (
    <div>
    {!cartItems.length==0 ?(
      <div className='w-8/12 mx-auto my-2 flex flex-col'>
          {cartItems.map((c,index)=>{
            return (
              <div key={c.card.info.id} className='flex flex-wrap md:flex-nowrap justify-between border-b border-slate-300 m-2 '>
            <div className='m-2 w-9/12 p-2'>
                <p className='m-1 my-3 text-xs'>{c.card.info.isVeg ? "🟩 Veg" : "🟥 Non-Veg"}</p>
                <p className='font-semibold m-1'>{c.card.info.name}</p>
                <p className='m-1'>Rs. {(c.card.info.price || c.card.info.defaultPrice)/100}</p>
                <p className='text-gray-500 m-1 text-sm'>{c.card.info.description}</p>
            </div>
            <div className='m-2 w-6/12 md:w-2/12 text-center p-2'>
                <img className='w-full h-20 rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+c.card.info.imageId}/>
                <button onClick={()=>handleRemove(c)} className='m-2 p-2 bg-red-500 text-sm text-white text-center rounded-lg hover:bg-red-600'>Remove</button>
            </div>
        </div>

            )
          })}
          <div className='flex justify-between'>
          <button onClick={handleClear} className='p-2 m-2 rounded-lg shadow-md font-semibold text-center bg-yellow-200 hover:bg-yellow-300'>Clear Cart</button>
          <p className='p-2 m-2 text-center font-bold'>Total Amount : Rs. {Amount}/-</p>
          <button onClick={handleOrder} className='p-2 m-2 rounded-lg font-semibold shadow-md text-center bg-green-400 hover:bg-green-500'>Place Order</button>
          </div>
          
          </div>
    ):(<EmptyCart/>)}
    
    </div>
  )
}

export default Cart
