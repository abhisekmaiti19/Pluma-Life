import React from "react";
import mic from "../assets/anouncemic.png";
import Anouncement from "../Components/Anouncement";

export default function Dashboard() {
  return (
    <div className="w-full h-full bg-bg-page-dark border-2 border-solid border-black flex justify-between overflow-hidden">
      <section className="w-3/5 h-full bg-slate-500 border-2 mt-2 p-6 overflow-y-auto gap-4 flex flex-col">
        <div className="w-full h-1/2 bg-white">p</div>
        <div className="w-full h-1/2 bg-white">p</div>
        <div className="w-full h-1/2 bg-white">p</div>
      </section>

      <section className="w-2/5 h-full p-6 bg-white rounded-xl border-2 mt-2">
        {/* Anouncement and Important section  */}
        <Anouncement compimg={mic} text="" />
      </section>
    </div>
  );
}
