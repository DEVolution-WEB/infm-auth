import React from 'react';

const Validpassword = ({ validLength, hasNumber, upperCase, lowerCase, match }) => {
	return (
		<div>
			<h3 className='mb-1.5 mt-3 text-xxs'>Mot de passe doit contenir</h3>
			<ul className='text-xxs'>
				<li className={`${validLength ? 'text-green-500' : 'text-gray-400'}`}>Entre 8 et 30 caractères</li>
				<li className={`${hasNumber ? 'text-green-500' : 'text-gray-400'}`}>Un chiffre</li>
				<li className={`${upperCase ? 'text-green-500' : 'text-gray-400'}`}>Une lettre majuscule</li>
				<li className={`${lowerCase ? 'text-green-500' : 'text-gray-400'}`}>Une lettre minuscule</li>
				<li className={`${match ? 'text-green-500' : 'text-gray-400'}`}>Mot de passe identique</li>
			</ul>
		</div>
	);
};

export default Validpassword;
