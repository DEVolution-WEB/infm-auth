import React, { useRef, useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { usePasswordValidation } from './usePasswordValidation';
import Validpassword from './ValidPassword';
import '../App.css';

const Signup = () => {
	// Set password validation le mot de passe doit contenir entre 8 caractères min, 1 chiffre, 1 lettre majuscule, 1 lettre minuscule //

	const { password, setPassword, activeBtn, setActiveBtn } =
		useGlobalContext();

	const [validLength, hasNumber, upperCase, lowerCase, match] =
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
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Les mots de passe ne correspondent pas!');
		}
		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError('Impossible de créer un compte');
		}
		setLoading(false);
		history.push('/');
	}

	return (
		<div className="h-screen flex bg-grey-light">
			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
				<h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
					Créer un compte
				</h1>
				{error && (
					<div>
						<p className="bg-warning p-3 rounded-md">{error}</p>
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
						/>
					</div>
					<div>
						<label htmlFor="password">Mot de passe</label>
						<input
							type="password"
							ref={passwordRef}
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							id="password"
							placeholder="Mot de passe"
							required
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
							placeholder="Confirmer mot de passe"
							required
							onChange={setSecond}
						/>
					</div>

					<div className="flex justify-center items-center mt-6">
						<button
							className={`bg-blue py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light ${
								activeBtn ? '' : 'hidden'
							}`}
							type="submit"
							disabled={loading}
						>
							Créer mon compte
						</button>
					</div>
					<div className="flex justify-center items-center">
						<Validpassword
							validLength={validLength}
							hasNumber={hasNumber}
							upperCase={upperCase}
							lowerCase={lowerCase}
							match={match}
						/>
					</div>
					<div
						onClick={() => setPassword({ secondPassword: '' })}
						className="flex justify-center items-center mt-2"
					>
						Déjà membre ?{' '}
						<Link
							className="hover:text-blue-light ml-1"
							to="/login"
						>
							Connectez-vous
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
