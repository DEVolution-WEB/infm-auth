import React from 'react';
import '../../assets/css/arrowDown.css';

const HeaderTitle = ({ title }) => {
	return (
		<div className='flex justify-center items-center bg-darkBlueCust w-full h-vh25 pt-24 md:pt-20'>
			<div className='text-white text-center bg-darkBlueCust'>
				<h1 className='relative flex flex-col justify-center items-center text-5xl arrowDown'>{title}</h1>
			</div>
		</div>
	);
};

export default HeaderTitle;
