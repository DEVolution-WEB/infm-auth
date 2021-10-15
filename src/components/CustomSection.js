import React from 'react';

function CustomSection({ children }) {
	return (
		<div>
			<div className="customSection"></div>
			<div className="bg-gray-100 py-12 px-10">{children}</div>
		</div>
	);
}

export default CustomSection;
