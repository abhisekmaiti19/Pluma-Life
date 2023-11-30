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
import Groupcard from "../Components/Dashboard/Groupcard";

export default function Dashboard() {
  return (
    <div className="w-full bg-bg-page-dark flex justify-between relative overflow-hidden">
      <section className="lg:w-4/6 min-[200px]:w-full h-full px-4 flex flex-col overflow-y-auto">
        <div className="w-full relative flex flex-col gap-2">
          <Message message={"Abhisek"} img={hi} />
          <div className="w-full rounded-r-xl overflow-x-scroll">
            {/* right arrow button  */}

            {/* <div
              className="w-[50px] h-full rounded-r-xl bg-gradient-to-l from-brand-dark-blue right-0 border-l-white  
            absolute flex justify-center items-center text-white hover:transition-all hover:bg-brand-dark-blue delay-50 hover:scale-100 duration-500 ease-out hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-10 h-10 hover:transition-all duration-100 ease-linear hover:w-16 hover:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div> */}

            {/* <div
              className="w-[50px] h-1/2 rounded-l-xl bg-gradient-to-r from-brand-dark-blue left-0 border-l-white  
            absolute flex justify-center items-center text-white hover:transition-all hover:bg-brand-dark-blue delay-50 hover:scale-100 duration-500 ease-out hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-10 h-10 hover:transition-all duration-100 ease-linear hover:w-16 hover:h-16 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div> */}

            {/* right arrow end  */}
            <div className="gap-6 flex pb-4 overflow-auto">
              <Statuscard />
              <Statuscard />
              <Statuscard />
            </div>
          </div>
        </div>

        {/* livecards  ___*/}
        <div className="w-full flex flex-col gap-4 pt-5 pb-5">
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
          <Groupcard />
        </div>
      </section>
      <section className="lg:w-1/4 lg:h-full overflow-y-auto lg:block min-[200px]:hidden fixed top-[70px] right-[1%]">
        {/* Anouncement and Important section  */}
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
