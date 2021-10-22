import React from 'react';
import yellowSep from '../../assets/image/yellowSep.png';

const Footertitle = () => {
	return (
		<div className='text-white text-center pt-12 pb-6'>
			<h1 className='text-4xl'>Contactez-nous dès maintenant pour une pré-inscription</h1>
			<div className='flex items-center justify-center pt-8 pb-6'>
				<img className='pointer-events-none' src={yellowSep} alt='separateur jaune'></img>
			</div>
			<h2 className='text-lg opacity-80'>Les formations peuvent être prises en charge par Pôle Emploi, le CPF et les OPCO</h2>
		</div>
	);
};

export default Footertitle;
