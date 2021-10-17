import React from 'react';

const Validpassword = ({
	validLength,
	hasNumber,
	upperCase,
	lowerCase,
	match,
}) => {
	return (
		<div>
			<h3 className="mb-1.5 mt-3">Mot de passe doit contenir</h3>
			<ul>
				<li
					className={`${
						validLength ? 'text-green-500' : 'text-red-400'
					}`}
				>
					entre 8 et 30 caractères
				</li>
				<li
					className={`${
						hasNumber ? 'text-green-500' : 'text-red-400'
					}`}
				>
					1 chiffre
				</li>
				<li
					className={`${
						upperCase ? 'text-green-500' : 'text-red-400'
					}`}
				>
					1 lettre majuscule
				</li>
				<li
					className={`${
						lowerCase ? 'text-green-500' : 'text-red-400'
					}`}
				>
					1 lettre minuscule
				</li>
				<li className={`${match ? 'text-green-500' : 'text-red-400'}`}>
					Mot de passe identique
				</li>
			</ul>
		</div>
	);
};

export default Validpassword;
