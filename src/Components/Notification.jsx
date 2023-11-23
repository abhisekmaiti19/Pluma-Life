import React from 'react';

const Notification = () => {
	return (
		<button className='p-3 rounded-xl bg-bg-page-dark hover:bg-blue-500/10 h-min mr-5 relative'>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
				/>
			</svg>
            <div className="noti absolute h-3 w-3 bg-red-600 rounded-full top-0 right-0"></div>
		</button>
	);
};

export default Notification;
