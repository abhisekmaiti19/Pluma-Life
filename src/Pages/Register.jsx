import React, { useState } from 'react'
import man from '../assets/login/man2.png'
import dots from '../assets/login/dots.png'
import coin from '../assets/login/coin.png'
import money from '../assets/login/money.png'

import SignupScreen from '../Components/SignupScreen'
import OTPVerify from './OTPVerify'

const Register = () => {
    const [verify, setVerify] = useState(false);
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-white flex justify-center items-center'>
        <div className='flex flex-col-reverse lg:flex-row max-w-5xl sm:m-10 md:mx-32 lg:mx-5 w-full bg-white sm:rounded-t-xl sm:rounded-b-xl overflow-hidden shadow-lg' style={{minHeight: '600px'}}>
            <div className='min-h-full lg:w-1/2 w-full p-16 px-8 sm:px-16'>
                {verify?<OTPVerify />:<SignupScreen setVerify={setVerify}/>}
                
            </div>
            <div className='h-96 sm:h-auto sm:min-h-full lg:w-1/2 relative p-10 sm:p-16  rounded-b-3xl overflow-hidden lg:rounded-none' style={{background: 'linear-gradient(35deg, #000 -25.94%, rgba(220, 179, 0, 0.99) 112.02%)'}}>
                <img src={dots} className='absolute right-0 bottom-0 w-3/5 z-0' alt="" />
                <div className='bg-white/25 shadow-lg text-white p-6 sm:p-10 rounded-xl w-full h-full relative z-0'>
                    <div className='text-xl font-semibold'>Oh! Hello👋</div>
                    <div className='text-xl font-semibold'>Your dream is just one step away 🤞</div>
                    <div className='text-2xl font-bold mt-10'>Register Now</div>

                    <img src={man} className='absolute -right-8 sm:-right-16 lg:-right-7 -bottom-10 sm:-bottom-16 lg:bottom-0 w-3/6 lg:w-4/6 max-h-72 object-contain z-10' alt="" />
                    <div className='shadow-xl absolute -left-6 sm:-left-10 bottom-10 w-20 lg:w-24 h-20 lg:h-24 bg-white z-0 rounded-full p-5'>
                        <img src={coin} className='drop-shadow-md' alt="" />
                    </div>
                    <div className='shadow-xl absolute -right-6 sm:-right-10 top-16 w-16 h-16 bg-white z-0 rounded-full p-3'>
                        <img src={money} className='drop-shadow-md' alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Register