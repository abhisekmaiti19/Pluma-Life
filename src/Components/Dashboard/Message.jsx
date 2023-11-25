import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Message(message) {
  return (
    <div className="flex md:text-2xl min-[200px]:text-[20px] gap-3 items-end">
      <h1 className="text-brand-dark-blue font-semibold"> Welcome,</h1>
      <Player
        src="https://lottie.host/4acb7016-022f-4962-b97a-029509730020/XMfXzCb5w7.json"
        className="w-fit md:h-[40px] min-[200px]:h-[35px]"
        speed="1"
        direction="1"
        mode="normal"
        loop
        autoplay
      />

      <h1 className="text-border-light-blue"> {message.data}</h1>
    </div>
  );
}
