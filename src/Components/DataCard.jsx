import React from 'react';

const DataCard = ({ title, value, color }) => {
	return (
		<div className={`border rounded-lg text-sm flex flex-col items-start justify-evenly p-2 gap-2 lg:gap-1 px-4 relative bg-white flex-grow sm:max-w-[230px]`} style={{borderColor: color}}>
			<span
				className={`absolute w-[6px] h-[6px] top-2 right-2 rounded-full animate-pulse`} style={{backgroundColor: color}}
			></span>
			<h1 className={`min-[1440px]:text-base font-semibold min-[1640px]:text-lg`} style={{color: color}}>
				{title}
			</h1>
			<h1 className="lg:text-[10px] min-[1440px]:font-normal lg:font-black min-[1440px]:text-sm font-normal min-[1640px]:text-base">
				{value}
			</h1>
		</div>
	);
};

export default DataCard;
