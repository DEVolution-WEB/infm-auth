import React from 'react';
import Logo from './Logo';
import './NavBar.css';
import Navlist from './Navlist';

const Navbar = () => {
	return (
		<div className="header">
			<div className="navbar-container px-7 py-3">
				<Logo />
				<Navlist />
				{/* <div>
                    <video src="https://www.infm.fr//uploads/1bf78fe8-c1bc-11ea-8d46-0242ac130004/7727ff36-c66e-11ea-9771-0242ac130004_web.mp4"></video>
                </div> */}
			</div>
		</div>
	);
};

export default Navbar;
