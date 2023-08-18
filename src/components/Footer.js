import React from 'react'
import  {LOGO_URL}  from '../utils/constants'

const Footer = () => {
  return (
    <div className='bg-purple-300 shadow-inner'>
        <div className='w-10/12 mx-auto h-auto bg-purple-300 flex-wrap items-center flex justify-around'>
        <div className=' w-56 p-1'>
            <div className='flex justify-start'>
                <img src={LOGO_URL} className=' h-16'/>
                <span className='font-semibold mt-5'>Foodie's Spot</span>
            </div>
            <p>Copyright @2023. Foodie's Spot Incl.All rights reserved</p>     
        </div>
        <div className='w-56 p-2'>
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
        <div className='w-56 p-2'>
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
        <div className='w-56 p-2 '>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Contact Us
                </li>
                <li className='m-2'>
                    6/51,Vijay Nagar,Delhi-110009
                </li>
                <li className='m-2'>
                    9096473197
                </li>
                <li className='m-2'>
                    kanavdahat55@gmail.com
                </li>
            </ul>
        </div>
    </div>


    </div>
      )
}

export default Footer
