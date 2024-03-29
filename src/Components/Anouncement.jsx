import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Anouncement({ compimg, text }) {
  const mytext = <p className="overflow-y-auto">{text}</p>;
  return (
    <div
      className="lg:w-full lg:h-[200px] xl:h-[300px] sm:hidden lg:block xl:p-6 lg:p-2 relative
     bg-bg-page-dark rounded-xl flex flex-col gap-6 border-2 border-brand-dark-blue items-center"
    >
      <img
        src={compimg}
        alt=""
        className="lg:h-2/3 lg:mt-2 absolute bottom-0 right-0 opacity-5"
      />
      <div className="w-full lg:h-[30px] xl:h-[60px] flex gap-5 justify-start relative">
        <h1 className="xl:text-xl lg:text-sm flex items-center border w-fit px-5 bg-bordergradient-1 text-white rounded font-bold  flex-col justify-center">
          Anouncement
        </h1>
      </div>
      <div
        className={`w-full lg:h-[90] xl:h-[180px] overflow-auto xl:text-xs text-justify ${
          !text ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        {!text ? (
          <div className="flex items-center justify-center w-full h-full">
            <Player
              src="https://lottie.host/5d739d0f-c403-4f9d-b750-665d87b1a08b/7pdHQ3Wa2W.json"
              className="w-fit h-[100px] xl:h-[160px]"
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
