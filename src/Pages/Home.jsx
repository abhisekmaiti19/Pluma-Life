import React, { useState } from 'react';
import logo from '../assets/logo.png';
import AsideButton from '../Components/AsideButton';
import Notification from '../Components/Notification';
import Dashboard from './Dashboard';

const Home = () => {
    const [dropDown, setDropDown] = useState(true);

	return (
		<div className="h-screen w-screen overflow-hidden flex flex-row">
			<aside className="bg-brand-dark-blue w-1/5 min-w-max p-6 h-screen flex flex-col overflow-y-auto">
				<img src={logo} alt="" className="w-28 mb-16" />
				<section className="flex flex-col justify-between h-full">
					<section>
						<AsideButton
							icon="memberIcon"
							text="Members"
							isActive={true}
						/>
						<AsideButton
							icon="kycIcon"
							text="KYC"
							isActive={false}
						/>
						<AsideButton
							icon="teamIcon"
							text="Team"
							isActive={false}
						/>
						<AsideButton
							icon="incomeIcon"
							text="Income"
							isActive={false}
						/>
						<AsideButton
							icon="supportIcon"
							text="Support"
							isActive={false}
						/>
					</section>
					<section>
                        <div className='bg-white/10 p-4 w-full rounded-xl overflow-hidden'>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <div className="w-12 h-12 rounded-full bg-white/20 border-solid border-white border-2"></div>
                                    <div className="flex pl-2 flex-col text-white">
                                        <div>Hello,👋</div>
                                        <div className="text-ellipsis overflow-hidden w-32 max-h-5 font-medium">
                                            Abhisek Maiti
                                        </div>
                                    </div>
                                </div>
                                <button className='text-white hover:bg-white/10 p-2 rounded-xl transition duration-200' onClick={()=>setDropDown((state)=>!state)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className={`text-white/70 flex flex-col ${dropDown?'max-h-0 opacity-0':'max-h-28 pt-4 opacity-1'} transition-all duration-500 ease-in-out`}>
                                
                                <button className={`p-2 hover:text-white w-full hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out`}>My Profile</button>
                                <button className={`p-2 hover:text-white w-full hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out`}>Log Out</button>
                            </div>
                        </div>
					</section>
				</section>
			</aside>
			<section className='h-screen w-full overflow-hidden'>
                <nav className='border-b border-solid border-black/10 w-full px-6 pt-3 overflow-x-auto flex gap-16 justify-between items-center'>
                    <section className=' text-gray-700 text-lg font-600 flex xl:gap-5 2xl:gap-7'>
                        <button className='p-6  nav-active hover:bg-black/5'>Dashboard</button>
                        <button className='p-6 hover:bg-black/5'>Payout</button>
                        <button className='p-6 hover:bg-black/5'>Wallet</button>
                        <button className='p-6 hover:bg-black/5'>Fund&nbsp;Manager</button>
                        <button className='p-6 hover:bg-black/5'>Settings</button>
                    </section>
                    <Notification />
                </nav>
                <main className='bg-bg-page-dark h-full overflow-y-auto p-5'>
                    <Dashboard/>
                </main>
            </section>
		</div>
	);
};

export default Home;
