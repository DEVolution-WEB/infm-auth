import React from 'react';

function SectionMembre({ children }) {
	return (
		<div>
			<div className='customSectionMembre'></div>
			<div className='w-full bg-transparent py-12 px-10'>{children}</div>
		</div>
	);
}

export default SectionMembre;
