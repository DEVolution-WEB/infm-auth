import React from 'react';
import logo3 from '../../assets/image/logoQualiopi.png';
import logo4 from '../../assets/image/logoMCFormation.png';
import logo5 from '../../assets/image/logoPoleEmploi.png';
import logo6 from '../../assets/image/logoMlocale.png';

const Footertoplogo = () => {
	return (
		<div className='container px-6 py-4 mx-auto'>
			{/* Partie au dessus de la map */}
			<div className='flex items-center justify-center mb-10 space-x-12'>
				<img className='h-10 opacity-80 hover:opacity-100 transition duration-150' src={logo3} alt='logo Qualiopi'></img>
				<img className='h-16 opacity-80 hover:opacity-100 transition duration-150' src={logo4} alt='logo Mon Compte Formation'></img>
				<img className='h-24 opacity-80 hover:opacity-100 transition duration-150' src={logo5} alt='logo Pole Emploi'></img>
				<img className='h-20 opacity-80 hover:opacity-100 transition duration-150' src={logo6} alt='logo Mission Locale'></img>
			</div>
		</div>
	);
};

export default Footertoplogo;
