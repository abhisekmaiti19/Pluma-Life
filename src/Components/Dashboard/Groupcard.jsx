import React from "react";
import img from "../../assets/coin.png";
import DataCard from "../DataCard";

export default function Groupcard() {
  return (
    <div className="w-full bg-gradient-to-br from-brand-dark-blue/80 to-blue-900/30 p-[2px] rounded-[8px] shadow-md relative">
      <span className="absolute bg-red-600 w-[10px] h-[10px] rounded-full animate-ping -top-1 -left-1"></span>
      <span className="absolute bg-red-600/70 w-3 h-3 rounded-full -top-[4px] -left-[5px]"></span>
      <div className="bg-white rounded-[6px] p-6">
        <div className="flex justify-between items-start min-[500px]:items-center pb-4 gap-6 flex-col min-[500px]:flex-row ">
          <div className="rounded-full flex items-center gap-4">
            <img src={img} alt="" className="w-9 h-9 bg-red-200 p-2 rounded-full" />
            <h1 className="text-sm font-bold md:text-md xl:text-lg whitespace-nowrap min-[1640px]:text-xl custom-underline text-brand-dark-blue">
              Income Status
            </h1>
          </div>
          <div className="flex flex-grow max-[501px]:w-full items-center justify-center min-[500px]:justify-end text-brand-dark-blue gap-2">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 min-[1440px]:w-6 min-[1440px]:h-6 min-[1640px]:w-8 min-[1640px]:h-8 min-[750px]:w-6 min-[750px]:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              <h1 className="lg:text-[12px] md:text-md lg:font-extrabold xl:text-[15px] min-[1640px]:text-[18px] font-bold text-sm min-[500px]:text-md text-brand-dark-blue">
                Today Income
              </h1>
            </div>
            <h1 className="xl:text-[15px] min-[1640px]:text-[18px] text-sm md:text-md font-semibold text-yellow-600/80">
              12345 BV
            </h1>
          </div>
        </div>
        {/* Card heading End  */}
        <div className="items-center w-full flex flex-wrap gap-5 justify-between mt-4">
          <DataCard title={'Card Title 1'} value={'125678.00 bv'} color={'#ff0000'}/>
          <DataCard title={'Card Title 1'} value={'125678.00 bv'} color={'#667700'}/>
          <DataCard title={'Card Title 1'} value={'125678.00 bv'} color={'#ff0000'}/>
        </div>
      </div>
    </div>
  );
}
