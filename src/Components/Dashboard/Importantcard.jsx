import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Importantcard({ compimg, text, binance, ironfx }) {
  const mytext = <p className="overflow-y-auto">{text}</p>;
  return (
    <div className=" lg:w-full lg:h-[350px] xl:h-[450px] sm:hidden lg:block lg:p-[2px] flex flex-col gap-6 items-center bg-bordergradient-1 rounded-[12px]">
      <div
        className="w-full h-full rounded-[10px] bg-white xl:p-6
                    lg:p-4 flex flex-col gap-6 items-start bg-bggradient-1 relative"
      >
        <h1 className="w-fit px-6 xl:text-2xl lg:text-sm lg:font-semibold rounded p-3 flex justify-center bg-bordergradient-1 text-white">
          Important
        </h1>
        <img
          src={compimg}
          className="absolute bottom-0 right-0 opacity-20 w-1/2"
          alt=""
        />

        <div className="h-[150px] w-full flex flex-col gap-4 relative">
          <h1 className="xl:h-[50px] lg:h-[30px] lg:w-full xl:w-5/6 lg:text-xs xl:text-base rounded border border-[#1B57B8] flex justify-center items-center font-medium">
            Account Openning links
          </h1>
          <div className="lg:h-[20px] xl:h-[30px] w-5/6 flex gap-4">
            <div className="w-1/2 h-full flex border border-border-light-blue lg:rounded">
              <img src={binance} alt="" className="w-5/6 h-full object-cover" />
              <div className="w-1/6 h-full rounded-tl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </div>
            <div className="w-1/2 h-full flex border border-border-light-blue lg:rounded">
              <img src={ironfx} alt="" className="w-5/6 h-full object-cover" />
              <div className="w-1/6 h-full rounded-tl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* contact us section  */}
        {/* =========================== */}
        <div className="h-[250px] w-full flex flex-col gap-4">
          <h1 className="xl:h-[35px] lg:h-[30px] lg:w-3/6 xl:w-3/6  max-[] lg:text-xs xl:text-base rounded border-[0.81px] border-[#1B57B8] relative flex justify-center items-center font-medium">
            Contact Us
          </h1>
          {/* IronFX- Binance  */}
          <div className="w-full h-50px flex">
            <div className="lg:w-3/5 xl:2/5 h-full flex lg:gap-2 xl:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="xl:w-6 xl:h-6 lg:w-6 lg:h-6 text-[#3F73C3]"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="lg:text-[10px] xl:text-xs font-semibold text-border-light-blue">
                IRON FX/ oCTA FX Live account
              </h1>
            </div>
            <div className="w-2/5 h-full flex flex-col justify-center items-end xl:text-sm lg:text-[10px] font-semibold">
              <a href="tel:7586984719">7586984719</a>
              <a href="tel:8945576890">8945576890</a>
            </div>
          </div>

          {/* Live Support  */}
          <div className="w-full h-50px flex">
            <div className="lg:w-3/5 xl:w-2/5 h-full flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="xl:w-5 xl:h-5 lg:w-4 lg:h-4 text-[#3F73C3]"
              >
                <path
                  fillRule="evenodd"
                  d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="lg:text-[10px] xl:text-xs font-semibold text-border-light-blue">
                Live Support
              </h1>
            </div>
            <div className="xl:w-3/5 lg:w-2/5 h-full flex justify-end items-center xl:text-sm lg:text-[10px] font-semibold">
              <a href="7718261071">7718261071</a>
            </div>
          </div>

          <div className="w-full h-50px flex">
            <div className="lg:w-3/5 xl:w-2/5 h-full flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="xl:w-5 xl:h-5 lg:w-4 lg:h-4 text-[#3F73C3]"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="lg:text-[10px] xl:text-xs font-semibold text-border-light-blue">
                KYC Support
              </h1>
            </div>
            <div className="xl:w-3/5 lg:w-2/5 h-full flex justify-end items-center xl:text-sm lg:text-[10px] font-semibold">
              <a href="7718261071">8945568849</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
