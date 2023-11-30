import React from "react";
import img from "../../assets/coin.png";

export default function Groupcard() {
  return (
    <div className="w-full lg:min-h-[200px] min-[750px]:min-h-[300px] min-[1640px]:min-h-[300px] bg-bordergradient-1 p-[2px] rounded-[16px] shadow-black shadow relative">
      <span className="absolute bg-red-600 w-[8px] h-[8px] rounded-full"></span>
      <span className="absolute bg-red-600 w-[10px] h-[10px] rounded-full animate-ping"></span>
      <div className="w-full h-full bg-white rounded-[14px] p-6 min-[1640px]:pb-[50px] ">
        {/* card heading  */}
        <div className="w-full h-1/3 min-[1640px]:h-2/5 flex justify-between items-center">
          <div className="w-[40px] h-[40px] min-[1640px]:w-[60px] min-[1640px]:h-[60px] p-1 rounded-full flex items-center bg-red-200">
            <img src={img} alt="" className="w-full" />
          </div>
          <div className="w-full h-full text-brand-dark-blue flex items-center justify-between pl-4">
            <h1 className="font-bold xl:text-lg min-[1640px]:text-xl lg:text-[15px] min-[750px]:text-xl">
              Income Status
            </h1>
            <div className="w-2/3 h-full flex items-center justify-end bg-white text-black flex-wrap py-2 gap-4 lg:gap-2">
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
              <h1 className="lg:text-[12px] lg:font-extrabold xl:text-[15px] min-[1640px]:text-[18px] font-bold text-brand-dark-blue">
                Today Income
              </h1>
              <h1 className="xl:text-[15px] min-[1640px]:text-[18px] lg:text-[12px] lg:font-semibold text-yellow-600/80">
                12345 BV
              </h1>
            </div>
          </div>
        </div>
        {/* Card heading End  */}
        <div className="items-center w-full min-[750px]:h-4/6 xl:h-4/6 min-[1640px]:h-5/6 flex flex-wrap justify-between">
          <div className="min-[750px]:w-[200px] lg:w-[100px] xl:w-[130px] min-[1440px]:w-[180px] min-[1640px]:w-[200px] h-2/3 border border-black rounded-xl text-sm flex flex-col items-start justify-evenly px-4 relative bg-white">
            <span className="absolute w-[6px] h-[6px] bg-red-500 top-2 right-2 rounded-full animate-pulse "></span>
            <h1 className="min-[750px]:text-[18px] lg:text-[12px] min-[1440px]:text-base font-semibold min-[1640px]:text-lg">
              Card Title 1
            </h1>
            <h1 className="lg:text-[10px] min-[1440px]:font-normal lg:font-black min-[1440px]:text-sm font-normal min-[1640px]:text-base">
              125678.00 bv
            </h1>
          </div>
          <div className="min-[750px]:w-[200px] lg:w-[100px] xl:w-[130px] min-[1440px]:w-[180px] min-[1640px]:w-[200px] h-2/3 border border-black rounded-xl text-sm flex flex-col items-start justify-evenly px-4 relative bg-white">
            <span className="absolute w-[6px] h-[6px] bg-red-500 top-2 right-2 rounded-full animate-pulse "></span>
            <h1 className="min-[750px]:text-[18px] lg:text-[12px] min-[1440px]:text-base font-semibold min-[1640px]:text-lg">
              Card Title 1
            </h1>
            <h1 className="lg:text-[10px] min-[1440px]:font-normal lg:font-black min-[1440px]:text-sm font-normal min-[1640px]:text-base">
              125678.00 bv
            </h1>
          </div>
          <div className="min-[750px]:w-[200px] lg:w-[100px] xl:w-[130px] min-[1440px]:w-[180px] min-[1640px]:w-[200px] h-2/3 border border-black rounded-xl text-sm flex flex-col items-start justify-evenly px-4 relative bg-white">
            <span className="absolute w-[6px] h-[6px] bg-red-500 top-2 right-2 rounded-full animate-pulse "></span>
            <h1 className="min-[750px]:text-[18px] lg:text-[12px] min-[1440px]:text-base font-semibold min-[1640px]:text-lg">
              Card Title 1
            </h1>
            <h1 className="lg:text-[10px] min-[1440px]:font-normal lg:font-black min-[1440px]:text-sm font-normal min-[1640px]:text-base ">
              125678.00 bv
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
