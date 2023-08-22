import React from 'react'
import ShimmerItem from './ShimmerItem'

const Shimmer = () => {
  return (
    <>
    <div className='flex flex-wrap w-10/12 mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-4'>
          <div className="cursor-pointer">
            <div className='w-20 h-10 md:w-32 md:h-20 rounded-3xl bg-gray-100 m-2 shadow-md'></div>
          </div>
          <div className="cursor-pointer">
            <div className='w-20 h-10 md:w-32 md:h-20 rounded-3xl bg-gray-100 m-2 shadow-md'></div>
          </div>
          <div className="cursor-pointer">
            <div className='w-20 h-10 md:w-32 md:h-20 rounded-3xl bg-gray-100 m-2 shadow-md'></div>
          </div>
          <div className="cursor-pointer">
            <div className='w-20 h-10 md:w-32 md:h-20 rounded-3xl bg-gray-100 m-2 shadow-md'></div>
          </div>
          <div className="cursor-pointer">
            <div className='w-20 h-10 md:w-32 md:h-20 rounded-3xl bg-gray-100 m-2 shadow-md'></div>
          </div>
        </div>
        <div className='w-10/12 mx-auto  flex justify-between flex-wrap'>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
    </div>
    </>
      )
}

export default Shimmer
