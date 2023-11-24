import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Anouncement({ compimg, text }) {
  const mytext = <p className="overflow-y-auto">{text}</p>;
  return (
    <div className="lg:w-full lg:h-[300px] sm:hidden lg:block xl:p-6 lg:p-2 bg-bg-page-dark rounded-xl flex flex-col gap-6 border-2 border-brand-dark-blue items-center">
      <div className="w-full h-[60px] flex gap-5 justify-center">
        <img src={compimg} alt="" className="h-full" />
        <h1 className="xl:text-xl lg:text-sm flex items-center font-bold after:w-3/5 after:border-2 after:border-stroke-light flex-col justify-center">
          Anouncement
        </h1>
      </div>
      <div
        className={`w-full h-[180px] overflow-auto xl:text-xs text-justify ${
          !text ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        {!text ? (
          <div className="flex items-center justify-center w-full h-full">
            <Player
              // src="https://lottie.host/bc832b70-0cb9-48b0-96f8-4327e00e0a24/EUFpTaCSpJ.json"
              src="https://lottie.host/5ba879c5-636e-49bd-9d29-7435f22e3ba9/0vR70MLpW1.json"
              className="w-fit"
              speed="1"
              direction="1"
              mode="normal"
              loop
              autoplay
            />
          </div>
        ) : (
          mytext
        )}
      </div>
    </div>
  );
}
