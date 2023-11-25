import React from "react";
import mic from "../assets/anouncemic.png";
import imp from "../assets/important.png";
import Anouncement from "../Components/Anouncement";
import Importantcard from "../Components/Dashboard/Importantcard";
import binance from "../assets/binance.jpeg";
import ironfx from "../assets/ironfx.jpeg";
import Message from "../Components/Dashboard/Message";
import hi from "../assets/hi.png";
import Statuscard from "../Components/Dashboard/Statuscard";

export default function Dashboard() {
  return (
    <div className="w-full h-full bg-bg-page-dark border-2 border-solid border-black flex justify-between overflow-hidden">
      <section className="lg:w-3/5 min-[200px]:w-full  h-full bg-slate-500 border-2 mt-2 p-6 overflow-y-auto gap-4 flex flex-col">
        <div className="w-full h-1/2 bg-white">p</div>
        <div className="w-full h-1/2 bg-white">p</div>
        <div className="w-full h-1/2 bg-white">p</div>
      </section>

      <section className="lg:w-2/5 lg:h-full p-6 bg-white rounded-xl border-2 mt-2 lg:block min-[200px]:hidden">
        {/* Anouncement and Important section  */}
        <Anouncement compimg={mic} text="" />
      </section>
    </div>
  );
}
