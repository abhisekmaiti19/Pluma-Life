import React from "react";
import face from "../../assets/statusface.png";

export default function Statuscard() {
  return (
    <div className="min-w-[260px] min-h-full bg-white border-[1px] border-black rounded-xl ">
      <div className="w-full h-1/3 bg-brand-dark-blue rounded-xl border-[2px] border-white flex items-center px-2 justify-around">
        <img src={face} alt="" />
        <h1 className="text-[14px] text-white font-bold">Current Status</h1>
      </div>
      <div className="h-2/3 w-full flex flex-col ">
        <div className="w-full h-1/2 flex justify-center p-3">
          <h1 className="w-1/2 h-full text-[12px] font-semibold flex justify-start items-center">
            Total Direct
          </h1>
          <h1 className="w-1/2 h-full text-[12px] font-semibold flex justify-center items-center ">
            20256 bv
          </h1>
        </div>
        <div className="w-full h-1/2 flex justify-center p-3">
          <h1 className="w-1/2 h-full text-[12px] font-semibold flex justify-start items-center">
            Total performance payout
          </h1>
          <h1 className="w-1/2 h-full text-[12px] font-semibold flex justify-center items-center ">
            20256 bv
          </h1>
        </div>
      </div>
    </div>
  );
}
