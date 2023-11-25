import React from "react";
import face from "../../assets/statusface.png";

export default function Statuscard() {
  return (
    <div className="w-[172px] h-[108px] bg-white relative border-[1px] border-black rounded-xl ">
      <div className="top-0 w-full h-1/2 bg-brand-dark-blue rounded-xl border-[2px] border-white flex items-center px-2 justify-around">
        <img src={face} alt="" />
        <h1 className="text-[12.5px] text-white font-bold">Current Status</h1>
      </div>
      <div className="h-full w-full flex flex-col">
        <div className="w-full h-1/2 flex justify-center p-2">
          <h1 className="w-1/2 text-[9px] font-semibold">Something value</h1>
          <h1 className="w-1/2 text-[9px] font-semibold">Something value</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
