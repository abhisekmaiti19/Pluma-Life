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
    <div className="w-full h-[91.5%] bg-bg-page-dark  flex justify-between overflow-hidden">
      <section className="lg:w-3/5 min-[200px]:w-full h-full mt-2 px-4 gap-4 flex flex-col">
        <div className="w-full lg:h-[250px] mt-4 pt-2 flex flex-col gap-4 overflow-hidden p-4">
          <Message message={"Abhisek"} img={hi} />
          <div className="w-full h-full overflow-x-scroll">
            <div className="h-full gap-6 flex pb-4">
              <Statuscard />
              <Statuscard />
              <Statuscard />
            </div>
          </div>
        </div>

        {/* livecards  */}
        <div className="w-full lg:h-[250px] mt-4 border pt-2 flex flex-col gap-4 overflow-hidden">
          p
        </div>
      </section>
      <section className="lg:w-2/5 lg:h-full p-6 bg-white rounded-xl border-2 mt-2 lg:block min-[200px]:hidden overflow-hidden">
        {/* Anouncement and Important section  */}
        <div className="w-full h-full overflow-y-auto customscroll flex flex-col gap-4">
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
