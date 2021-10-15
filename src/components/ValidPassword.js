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
				<li className={`${validLength ? 'text-green' : 'text-red'}`}>
					entre 8 et 30 caractères
				</li>
				<li className={`${hasNumber ? 'text-green' : 'text-red'}`}>
					1 chiffre
				</li>
				<li className={`${upperCase ? 'text-green' : 'text-red'}`}>
					1 lettre majuscule
				</li>
				<li className={`${lowerCase ? 'text-green' : 'text-red'}`}>
					1 lettre minuscule
				</li>
				<li className={`${match ? 'text-green' : 'text-red'}`}>
					Mot de passe identique
				</li>
			</ul>
		</div>
	);
};

export default Validpassword;
