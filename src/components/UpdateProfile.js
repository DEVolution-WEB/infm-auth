import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { usePasswordValidation } from './usePasswordValidation';
import Validpassword from './ValidPassword';

const UpdateProfile = () => {
	// Set password validation // Set password validation le mot de passe doit contenir entre 8 caractères min, 1 chiffre, 1 lettre majuscule, 1 lettre minuscule //
	const { password, setPassword, activeBtn, setActiveBtn } =
		useGlobalContext();

	const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
		usePasswordValidation({
			firstPassword: password.firstPassword,
			secondPassword: password.secondPassword,
		});

	useEffect(() => {
		if (validLength && hasNumber && upperCase && lowerCase && match) {
			setActiveBtn(true);
		} else {
			setActiveBtn(false);
		}
	}, [validLength, hasNumber, upperCase, lowerCase, match]);

	const setFirst = (event) => {
		setPassword({ ...password, firstPassword: event.target.value });
	};
	const setSecond = (event) => {
		setPassword({ ...password, secondPassword: event.target.value });
	};

	// set password authentication
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Les mots de passe ne correspondent pas!');
		}

		const promises = [];
		setLoading(true);
		setError('');
		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then()
			.catch(() => {
				return setError('Impossible de mettre à jour le compte');
			})
			.finally(() => {
				setLoading(false);
				history.push('/');
			});
	}

	return (
		<div className="h-screen flex bg-grey-light">
			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
				<h1 className="text-2xl font-medium text-primary mt-4 mb-10 text-center">
					Mettre à jour votre compte
				</h1>
				{error && (
					<div>
						<p className="text-base text-red mb-5">{error}</p>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Adresse e-mail</label>
						<input
							type="email"
							ref={emailRef}
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							id="email"
							placeholder="Votre e-mail"
							required
							defaultValue={currentUser.email}
						/>
					</div>
					<div>
						<label htmlFor="password">Mot de passe</label>
						<input
							type="password"
							ref={passwordRef}
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							id="password"
							placeholder="Laisser vide pour garder le même"
							onChange={setFirst}
						/>
					</div>
					<div>
						<label htmlFor="password-confirm">
							Confirmer votre mot de passe
						</label>
						<input
							type="password"
							ref={passwordConfirmRef}
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							id="passwordconfirm"
							placeholder="Laisser vide pour garder le même"
							onChange={setSecond}
						/>
					</div>

					<div className="flex justify-center items-center mt-6">
						<button
							className={`bg-blue py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light ${
								activeBtn ? '' : 'hidden'
							}`}
							disabled={!activeBtn}
						>
							Mettre à jour
						</button>
					</div>
					<div className="flex justify-center items-center">
						<Validpassword
							validLength={validLength}
							hasNumber={hasNumber}
							upperCase={upperCase}
							lowerCase={lowerCase}
							match={match}
							specialChar={specialChar}
						/>
					</div>
					<div
						onClick={() => setPassword({ secondPassword: '' })}
						className="w-full text-center mt-2 mb-3"
					>
						{/* <div className=" flex flex-col justify-around mt-2 mb-0">
							<Link to="./update-profile">
								Modifier les identifiant de connexion{' '}
							</Link>
						</div> */}
						{/* <Link className="hover:text-blue-light" to="/dashboard">
							Annuler{' '}
						</Link> */}
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProfile;
