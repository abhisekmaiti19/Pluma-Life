import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Message({ message, img }) {
  return (
    <div className="flex min-[200px]:text-[20px] gap-3 items-cente mid:text-[23px]">
      <h1 className="text-brand-dark-blue font-semibold"> Welcome,</h1>
      <h1 className="text-border-light-blue"> {message}</h1>
      <img src={img} className="h-[30px] w-[30px]" alt="" />
    </div>
  );
}
