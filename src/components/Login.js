import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

const Login = () => {
	// set password authentication
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
		} catch (error) {
			setError('Impossible de se connecter');
		}
		setLoading(false);
		history.push('/');
	}

	return (
		<div className="h-screen flex bg-grey-light">
			<nav>
				<img src="" alt="logo INFM" />
				<ul>
				<li> Accueil </li>
				<li> Accueil </li>
				<li> Accueil </li>
				<li> Accueil </li>
				</ul>
			</nav>

			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
				<h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
					Page de connection
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
							placeholder="Votre mot de passe"
							required
						/>
					</div>
					<div className="flex justify-center items-center mt-6">
						<button
							disabled={loading}
							type="submit"
							className="bg-blue py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
						>
							Se connecter
						</button>
					</div>
					<div className="w-full text-center mt-3 mb-3">
						<Link
							className="hover:text-blue-light"
							to="/forgot-password"
						>
							Mot de passe oublié ?
						</Link>
					</div>
					<div className="mt-2 mb-0">
						Nouveau membre ?{' '}
						<Link className="hover:text-blue-light" to="/signup">
							Créer un compte
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
