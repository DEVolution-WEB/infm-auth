import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import HeaderTitle from '../components/Layout/HeaderTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../App.css';

const LoginPage = () => {
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
		<>
			<HeaderTitle title="Espace Membre" />
			<video
				className="z-n1 absolute w-screen h-screen object-cover"
				autoPlay
				loop
				muted
			>
				<source
					src="https://firebasestorage.googleapis.com/v0/b/infm-773d8.appspot.com/o/infm-live.mp4?alt=media&token=05502d75-50e1-4ce0-aa05-7c07563806ba"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="flex bg-transparent justify-center mt-20">
				<div className="w-86 h-64  mt-10 bg-darkBlueCust text-white flex justify-center rounded-xl shadow-md py-4 px-8">
					<form onSubmit={handleSubmit}>
						<Box noValidate>
							<TextField
								id="email"
								label="Adresse e-mail"
								type="email"
								variant="outlined"
								inputRef={emailRef}
								required={true}
								margin="normal"
								style={{
									backgroundColor: 'white',
									width: '80%',
									marginTop: '1rem',
									borderRadius: '5px',
								}}
							/>
							<TextField
								// error
								id="password"
								label="Mot de passe"
								type="password"
								variant="outlined"
								inputRef={passwordRef}
								required={true}
								style={{
									backgroundColor: 'white',
									width: '80%',
									marginTop: '1rem',
									marginBottom: '1rem',
									borderRadius: '5px',
								}}
							/>
						</Box>
						{error && (
							<p className="text-xs text-yellowCust">{error}</p>
						)}
						<div className="flex flex-col justify-center items-center">
							<button
								disabled={loading}
								type="submit"
								className="mt-3 py-2 px-4 text-sm bg-yellowCust text-black rounded focus:outline-none hover:bg-yellow-400 transition duration-200"
							>
								Se connecter
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
