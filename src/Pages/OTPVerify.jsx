import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const OTPVerify = () => {
    const [otp, setOTP] = useState('');
    const [color, setColor] = useState('black/20');
    const setOtp = (val) => {
        if(val.length<=6)
            setOTP(val)
    }

	return (
		<div className="flex flex-col justify-between h-full gap-16 sm:gap-10">
			<div>
				<div className="text-2xl font-semibold text-black">
                    Verifying you 👁
				</div>
				<div className="text-sm text-black/70">
                Enter one-time-password sent to your number
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-2 pb-3">
					<label htmlFor="otp" className="font-medium text-sm">
                        Enter Your OTP
					</label>
                    <div className='relative'>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                            onFocus={()=>setColor('yellow-600')}
                            onBlur={()=>setColor('black/20')}
                            className="text-lg p-3 w-full opacity-0"
                            style={{letterSpacing: '12px', fontFamily: 'monospace', paddingLeft: '20%'}}
                        />
                        <div className='absolute left-0 right-0 top-0 bottom-0 z-10 flex gap-2'>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length===0?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[0]}
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length===1?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[1]}
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length===2?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[2]}
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className="bg-white flex justify-center items-center h-full w-full  text-xl">
                                    -
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length===3?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[3]}
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length===4?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[4]}
                                </label>
                            </div>
                            <div className='h-full' style={{width: '100%'}}>
                                <label htmlFor="otp" className={`bg-white h-full w-full border-2 border-solid flex justify-center items-center text-xl rounded-xl ${otp.length>4?`border-${color}`:'border-black/20'}`}>
                                    {otp.split('')[5]}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className='text-blue-600 text-xs text-left'>Having trouble ? <span className='font-semibold to-blue-950'>Resend it now</span></button>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="phone" className="font-medium text-sm">
                        Wrong number ? Enter your number again
					</label>
					<input
						type="text"
						id="phone"
						name="phone"
						placeholder="Enter your phone number"
						className="text-sm border-2 border-dashed border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
					/>
                    <button className="w-fit px-3 py-2 text-sm bg-yellow-600 text-white rounded-xl">
                        Send OTP Again
                    </button>
				</div>
			</div>
			<div>
                <button
					className="px-5 py-4 mb-1 text-lg rounded-xl text-white font-semibold w-full bg-left hover:bg-right hover:shadow-inner transition-all duration-200"
					style={{
						backgroundSize: '120%',
						backgroundImage:
							'linear-gradient(89deg, #000 -76.05%, #C6A102 105.86%)',
					}}
				>
					Verify Now
				</button>
				<span className="text-sm">
					Already have an account?
					<Link to="/login">
						<span className="text-yellow-600 text-sm">
							{' '}
							Login now.
						</span>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default OTPVerify;
