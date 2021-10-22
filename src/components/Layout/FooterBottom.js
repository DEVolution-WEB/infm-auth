import React from 'react';
import logo2 from '../../assets/image/logo48couleurs.png';

const Footerbottom = () => {
	return (
		<div className='container px-6 py-4 mx-auto text-center'>
			{' '}
			{/* Partie en dessous de la map */}
			<div className='block md:flex md:items-center md:justify-center mb-10 space-x-3'>
				{/* Partie au dessus de la map */}
				<p className=' text-white font-bold font-family-default text-lg'>Nous soutenons une économie responsable</p>
				<a href='https://www.48couleurs.org/adhesion-mecenat' class='inline-block'>
					<img className='h-12' src={logo2} alt='logo 48 couleurs'></img>
				</a>
			</div>
			<div>
				<p className='text-center text-lightGrayCust'>Réalisé par DEVOLUTION — Copyright 2021 — Mentions légales</p>
			</div>
		</div>
	);
};

export default Footerbottom;
