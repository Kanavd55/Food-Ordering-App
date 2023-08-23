import React from 'react'

const Grocery = () => {
  return (
    <div className='my-5 shadow-lg w-full'>
        <div className='h-auto p-5 m-5 flex flex-wrap justify-between'>
          <div className='w-auto p-3 m-3'>
            <div className='m-3'>
              <p className='text-3xl font-bold'>Convinience groceries,</p>
              <p className='text-3xl font-bold'>for your needs</p>
            </div>
            <div className='m-3 my-12'>
              <p>🛵 <span className='font-semibold'>Groceries deleivered in minutes,</span>Just as fast as we deliver food!</p>
              <p>⏲ <span className='font-semibold'>Open 6 AM to late night everyday,</span>from your morning coffee needs to snacks for your late night binge.</p>
            </div>
          </div>
          <div className='w-auto p-3 m-3 ml-auto'>
            <div className='m-3'>
              <h1 className='text-3xl font-bold'>Newly added groceries feature</h1>
              <p className='text-3xl font-bold'>Order now!</p>
            </div>
            <div className='m-3 my-12'>
              <p>🥦 Daily essentials,Dairy, bread ,eggs,Fresh fruits, veggies and lot more...</p>
              <p>💖 Trusted by millions of shoppers in Bangalore, Delhi-NCR, Hyderabad, Mumbai, Chennai, Pune & other cities</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Grocery
