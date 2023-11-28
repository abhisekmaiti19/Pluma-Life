import React from "react";

export default function Message({ message, img }) {
  return (
    <div className="flex min-[200px]:text-[20px] lg:text-[25px] gap-3 items-center mid:text-[23px] h-[70px] pt-2">
      <h1 className="text-brand-dark-blue font-semibold"> Welcome,</h1>
      <h1 className="text-border-light-blue"> {message}</h1>
      <img src={img} className="h-[30px] w-[30px]" alt="" />
    </div>
  );
}
