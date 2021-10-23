import React from 'react';
import '../../assets/css/Inputs.css';

const InputLogin = ({ emailRef, error, passwordRef }) => {
	return (
		<>
			<div className="md-input-main font-sans text-xl mt-5">
				<div className="md-input-box relative">
					<input
						id="email"
						ref={emailRef}
						type="email"
						className="md-input w-full text-lightGrayCust bg-transparent"
						placeholder=" "
					/>
					<label
						htmlFor="email"
						className={`md-label absolute pointer-events-none block ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
					>
						Votre e-mail
					</label>
					<div
						className={`md-input-underline absolute left-0 right-0 pointer-events-none ${
							error && 'error'
						}`}
					/>
				</div>
			</div>
			<div className="md-input-main font-sans text-xl mt-5">
				<div className="md-input-box relative">
					<input
						id="password"
						ref={passwordRef}
						type="password"
						className="md-input w-full text-lightGrayCust bg-transparent"
						placeholder=" "
					/>
					<label
						htmlFor="password"
						className={`md-label absolute pointer-events-none block ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
					>
						Mot de passe
					</label>
					<div
						className={`md-input-underline absolute left-0 right-0 pointer-events-none ${
							error && 'error'
						}`}
					/>
				</div>
			</div>
		</>
	);
};

export default InputLogin;
