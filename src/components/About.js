import React from 'react';
import { LOGO_URL } from '../utils/constants';

class About extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Kanav",
                location:"Delhi",
                avatar_url:"https://avatars.githubusercontent.com/u/113387300?v=4"
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Kanavd55");
        const json=await data.json();
        this.setState({
            userInfo:json
        })
    }

    render(){
        const {avatar_url,name,location}=this.state.userInfo;
        return(
            <div>
                <div className='w-full h-auto bg-orange-300 p-6 mb-3 text-xs sm:text-base text-center shadow-lg'>
                    <div className=' mx-auto p-1'>
                        <div className='flex justify-center'>
                            <img src={LOGO_URL} className=' h-16'/>
                            <span className='font-semibold mt-5'>Foodie's Spot</span>
                        </div>     
                    </div>
                    <p className='text-gray-700 p-2'>It utilizes Swiggy's live api data to fetch real-time restaurant information, 
                    and includes features such as shopping cart feature using redux toolkit,and UI configuration with conditional rendering.Additionally,
                    the app implememnts Shimmer UI,react-top-loader feature and lazy loading.
                    </p>
                </div>
                <div className='w-full h-auto p-6 flex flex-wrap font-semibold text-sm sm:text-lg mb-3 justify-around'>
                <div className='m-2 p-2'>
                        <p className='m-2 p-2'>System Engineer</p>
                        <p className='m-2 p-2'>Tata Consultancy Services</p>
                        <p className='m-2 p-2'>9096473197/8830765812</p>
                        <p className='m-2 p-2'>{location}</p>
                        <p className='m-2 p-2'></p>
                    </div>
                    <div>
                    <img src={avatar_url} className='rounded-full h-40' ></img>
                        <p className='font-bold m-2 p-2'>Mr. {name}</p>
                    </div>
                    <div className='m-2 p-2'>
                    <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"/> <span>https://github.com/Kanavd55</span></div>
                    <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"/> <span>https://www.linkedin.com/in/kd28/</span></div>
                    <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1" src="https://cdn-icons-png.flaticon.com/128/732/732200.png"/> <span>kanavdahat55@gmail.com</span></div>
                    <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1" src="https://cdn-icons-png.flaticon.com/128/174/174855.png"/> <span>https://www.instagram.com/kanavvv_/</span></div>
                    </div>
                </div>
            </div>
            )
    }
    
}

export default About
