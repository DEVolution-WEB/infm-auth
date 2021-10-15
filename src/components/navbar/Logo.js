import React from 'react';
import './NavBar.css';
// import WhiteLogo from '../../image/0-logo-white.png';
import BlueLogo from '../../image/0-logo.png';

const Logo = () => {
	return (
		<div className="logo">
			<img src={BlueLogo} alt="" />
		</div>
	);
};

export default Logo;
