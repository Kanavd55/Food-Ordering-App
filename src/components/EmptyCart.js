import React from 'react'

const EmptyCart = () => {
  return (
    <div className='w-10/12 text-center mx-auto h-72 align-middle m-4 p-4 text-4xl'>
        <h1 className='m-3 p-3 font-extrabold '>Your Cart is Empty!</h1>
        <h1 className='m-3 p-3 font-semibold '>Please add item to your cart.</h1>
    </div>
  )
}

export default EmptyCart;
