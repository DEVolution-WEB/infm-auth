import React from 'react';

const Inputadmin = ({
	emailRef,
	passwordRef,
	passwordConfirmRef,
	setUserName,
	userName,
	email,
	setEmail,
	setFirst,
	setSecond,
	error,
}) => {
	return (
		<>
			<div className="md-input-main font-sans text-lg mt-12">
				<div className="md-input-box relative">
					<input
						type="text"
						className="md-input w-full text-black bg-gray-100"
						placeholder=" "
						onChange={(e) => setUserName(e.target.value)}
						required
						value={userName}
					/>
					<label
						className={`md-label absolute pointer-events-none block ml-2 ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
						htmlFor="name"
					>
						Nom
					</label>
					<div
						className={`md-input-underline absolute left-0 right-0 pointer-events-none ${
							error && 'error'
						}`}
					/>
				</div>
			</div>
			<div className="md-input-main font-sans text-lg mt-5">
				<div className="md-input-box relative">
					<input
						type="email"
						ref={emailRef}
						className="md-input w-full text-black bg-gray-100"
						placeholder=" "
						onChange={(e) => setEmail(e.target.value)}
						required
						value={email}
					/>
					<label
						className={`md-label absolute pointer-events-none block ml-2 ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
						htmlFor="email"
					>
						Email
					</label>
					<div
						className={`md-input-underline absolute left-0 right-0 pointer-events-none ${
							error && 'error'
						}`}
					/>
				</div>
			</div>
			<div className="md-input-main font-sans text-lg mt-5">
				<div className="md-input-box relative">
					<input
						type="password"
						ref={passwordRef}
						id="password"
						className="md-input w-full text-black bg-gray-100"
						placeholder=" "
						onChange={setFirst}
						required
					/>
					<label
						className={`md-label absolute pointer-events-none block ml-2 ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
						htmlFor="password"
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
			<div className="md-input-main font-sans text-lg mt-5">
				<div className="md-input-box relative">
					<input
						type="password"
						ref={passwordConfirmRef}
						id="passwordconfirm"
						className="md-input w-full text-black bg-gray-100"
						placeholder=" "
						onChange={setSecond}
						required
					/>
					<label
						className={`md-label absolute pointer-events-none block ml-2 ${
							error ? 'text-red-600' : 'text-lightGrayCust'
						}`}
						htmlFor="password-confirm"
					>
						Confirmer votre mot de passe
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

export default Inputadmin;
