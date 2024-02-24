import React from 'react'
import  {LOGO_URL}  from '../utils/constants'

const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <div className='bg-purple-300 shadow-inner text-xs sm:text-base w-auto'>
        <div className='w-10/12 mx-auto h-auto bg-purple-300 flex-wrap items-center flex justify-around'>
        <div className=' w-[40%] md:w-[20%] p-1'>
            <div className='flex justify-start'>
                <img src={LOGO_URL} className=' h-10 sm:h-14'/>
                <span className='font-semibold text-center p-2'>Foodie's Spot</span>
            </div>
            <p>Copyright @{date}. Foodie's Spot Incl.All rights reserved</p>     
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2 '>
                    Company
                </li>
                <li className='m-2'>
                    About Us
                </li>
                <li className='m-2'>
                    Grocery
                </li>
                <li className='m-2'>
                    Career
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Legal
                </li>
                <li className='m-2'>
                    Terms & Conditions
                </li>
                <li className='m-2'>
                    Privacy Policy
                </li>
                <li className='m-2'>
                    Cookie Policy
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Contact Us
                </li>
                <li className='m-2'>
                    Vijay Nagar,Delhi-110009
                </li>
                <li className='m-2'>
                    9999999999
                </li>
                <li className='m-2 break-words'>
                    kanavdahat55@gmail.com
                </li>
            </ul>
        </div>
    </div>


    </div>
      )
}

export default Footer
