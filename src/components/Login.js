import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Login = () => {
	// set password authentication
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
		} catch {
			return setError(
				'Votre e-mail ou votre mot de passe est incorrect.'
			);
		}
		setLoading(false);
		history.push('/dashboard');
	};

	return (
		<div className="h-screen flex bg-grey-light">
			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
				<h1
					className="text-2xl font-medium text-primary mt-4 mb-10
				 text-center"
				>
					Page de connection
				</h1>

				{error && <p className="text-sm text-red mb-5">{error}</p>}

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
					<div className="flex flex-col justify-center items-center mt-6">
						<button
							disabled={loading}
							type="submit"
							className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:text-yellowCust"
						>
							Se connecter
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
