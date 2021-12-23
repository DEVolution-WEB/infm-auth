import '../App.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import HeaderTitle from '../components/Layout/HeaderTitle';
import '../assets/css/Inputs.css';
import InputLogin from '../components/Utils/InputLogin';

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
			await login(emailRef.current.value, passwordRef.current.value);
		} catch {
			return setError('Votre e-mail ou votre mot de passe est incorrect.');
		}

		history.push('/dashboard');
	};

	return (
		<>
			<HeaderTitle title='Espace Membre' />
			<div className='flex bg-transparent justify-center mt-20'>
				<div className='w-86 h-64  mt-10 bg-darkBlueCust text-white flex justify-center rounded-xl shadow-md py-4 px-8'>
					<form onSubmit={handleSubmit} autocomplete='off'>
						<InputLogin error={error} emailRef={emailRef} passwordRef={passwordRef} />

						{error && <p className='text-xs text-yellowCust'>{error}</p>}
						<div className='flex flex-col justify-center items-center'>
							<button disabled={loading} type='submit' className='mt-5 py-2 px-4 text-sm bg-yellowCust text-black rounded focus:outline-none hover:bg-yellow-400 transition duration-200'>
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
