import React from "react";
import face from "../../assets/statusface.png";

export default function Statuscard({content}) {
  return (
    <div className={`min-w-full min-[431px]:min-w-[260px] min-h-md bg-white border-[1px] shadow-sm rounded-xl flex flex-grow flex-col ${content?'':'animate-pulse'}`}>
      <div className={`w-full h-20 bg-${content?'brand-dark-blue':'gray-300'} rounded-xl flex items-center px-2 justify-center gap-5`}>
        <img src={content?content.image||face:''} alt="" className="w-8 h-8"/>
        <h1 className="text-md text-white font-bold">{content?.title}</h1>
      </div>
      <div className="flex-auto w-full flex items-center justify-center py-2">
        <table className="text-xs font-medium mx-2">
        {Object.keys(content?.data || {}).map(key=> (
            <tr className="w-full">
              <td className="p-2 min-w-[140px] text-blue-900 font-bold">{key}</td>
              <td className="p-2 whitespace-nowrap">{content.data[key]}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}