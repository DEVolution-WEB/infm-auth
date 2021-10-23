import React from 'react';
import '../../assets/css/arrowDown.css';

function HeaderTitle({ title }) {
	return (
		<div className='arrowDown bg-darkBlueCust w-full h-48 pt-24 md:pt-20'>
			<div className='text-white text-center bg-darkBlueCust pt-5'>
				<h1 className='text-5xl'>{title}</h1>
			</div>
		</div>
	);
}

export default HeaderTitle;
