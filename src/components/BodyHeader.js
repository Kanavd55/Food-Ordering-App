import React from 'react'
import { PIZZA_IMG_URL,IceCreams_IMG_URL,NORTH_IMG_URL,CHINESE_IMG_URL,HEALTHY_IMG_URL } from '../utils/constants'
import { toast } from 'react-hot-toast';

const BodyHeader = (props) => {
    const {listOfRestaurant,setFilteredList,setProgress,filteredList}=props;

  return (
    <div className='flex flex-wrap justify-center md:justify-between shadow-lg rounded-3xl p-4'>
          <div className="cursor-pointer hover:text-orange-400" onClick={()=>{
            setFilteredList(listOfRestaurant.filter((res)=>{
              setProgress(30);
              return(res.info.cuisines.join(",").toLowerCase().includes('pizza'))
            }))
            setProgress(100);
            toast("Pizza filter applied");
          }}>
            <img src={PIZZA_IMG_URL} className='w-20 h-10 md:w-32 md:h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center  font-semibold'>Pizza</p>
          </div>
          <div className="cursor-pointer hover:text-orange-400" onClick={()=>{
            setProgress(30);
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('north indian'))
            }))
            setProgress(100);
            toast("North Indian filter applied");
          }}>
            <img src={NORTH_IMG_URL} className='w-20 h-10 md:w-32 md:h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>North Indian</p>
          </div>
          <div className="cursor-pointer hover:text-orange-400" onClick={()=>{
            setProgress(30);
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('ice cream'))
            }))
            setProgress(100);
            toast("Ice cream filter applied");
          }}>
            <img src={IceCreams_IMG_URL} className='w-20 h-10 md:w-32 md:h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Ice Cream</p>
          </div>
          <div className="cursor-pointer hover:text-orange-400" onClick={()=>{
            setProgress(30);
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('chinese'))
            }))
            setProgress(100);
            toast("Chinese filter applied");
          }}>
            <img src={CHINESE_IMG_URL} className='w-20 h-10 md:w-32 md:h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Chinese</p>
          </div>
          <div className="cursor-pointer hover:text-orange-400" onClick={()=>{
            setProgress(30);
            setFilteredList(listOfRestaurant.filter((res)=>{
              return(res.info.cuisines.join(",").toLowerCase().includes('healthy food'))
            }))
            setProgress(100);
            toast("Healthy food filter applied");
          }}>
            <img src={HEALTHY_IMG_URL} className='w-20 h-10 md:w-32 md:h-20 rounded-3xl m-2 shadow-md'/>
            <p className='text-center font-semibold'>Healthy Food</p>
          </div>
        </div>
  )
}

export default BodyHeader
