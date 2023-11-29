import React, { useRef } from "react";
import mic from "../assets/anouncemic.png";
import imp from "../assets/important.png";
import Anouncement from "../Components/Anouncement";
import Importantcard from "../Components/Dashboard/Importantcard";
import binance from "../assets/binance.jpeg";
import ironfx from "../assets/ironfx.jpeg";
import Message from "../Components/Dashboard/Message";
import hi from "../assets/hi.png";
import Statuscard from "../Components/Dashboard/Statuscard";
import Groupcard from "../Components/Dashboard/Groupcard";

import bag from '../assets/statusbag.png'
import money from '../assets/statusmoney.png'

export default function Dashboard() {
  const buisnessStatus = {
    title: 'Buisness Status',
    image: bag,
    data: {
      'My Rank': '102',
      'Buisness Ratio': '1069:600',
      'Performance Bonus': '23456 bv',
    }
  }
  const currentStatus = {
    title: 'Current Status',
    data: {
      'Total Direct': '10',
      'Downline Team': '23',
    }
  }
  const payoutStatus = {
    title: 'Payout Status',
    image: money,
    data : {
      'Total Payout': '10367 pv',
      'Total Performance Payout': '926793 pv'
    }
  }


  const ref = useRef(null);
  const scrollToRight = ()=>{
    ref.current.scrollLeft += 260;
  }
  const scrollToLeft = ()=>{
    ref.current.scrollLeft -= 260;
  }

  return (
    <div className="w-full bg-bg-page-dark flex justify-between relative overflow-hidden">
      <section className="lg:w-4/6 min-[200px]:w-full h-full px-4 flex flex-col overflow-y-auto">
        <div className="w-full relative flex flex-col gap-2">
          <Message message={"Abhisek"} img={hi} />
          <div className="w-full rounded-xl overflow-hidden relative">
            <div className="absolute left-0 h-full w-0 hover:w-40 top-0 bg-gradient-to-r from-brand-dark-blue to-transparent rounded-l-xl opacity-0 hover:opacity-100 transition-all hidden sm:block">
              <button className="text-white h-full p-2 w-40" onClick={scrollToLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              </button>
            </div>
            <div className="absolute right-0 h-full top-0 bg-gradient-to-l from-brand-dark-blue to-transparent rounded-l-xl opacity-0 hover:opacity-100 transition-all hidden sm:block">
              <button className="text-white h-full p-2 w-20 hover:w-40 flex justify-end items-center transition-all duration-200 ease-in-out" onClick={scrollToRight}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              </button>
            </div>
            <div className="w-full overflow-x-auto customscroll scroll-smooth" ref={ref}>
              <div className="gap-6 flex justify-between">
                <Statuscard content={currentStatus}/>
                <Statuscard content={payoutStatus}/>
                <Statuscard content={buisnessStatus}/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 pt-10 pb-5">
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
        </div>
      </section>
      <section className="lg:w-1/4 lg:bottom-0 overflow-y-auto lg:block min-[200px]:hidden fixed top-[70px] right-[1%]">
        <div className="customscroll flex flex-col gap-4 p-6 m-4 border-2 bg-white rounded-xl">
          <Anouncement compimg={mic} text="" />
          <Importantcard
            compimg={imp}
            text=""
            binance={binance}
            ironfx={ironfx}
          />
        </div>
      </section>
    </div>
  );
}
