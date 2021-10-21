import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import SectionMembre from './SectionMembre';
import customSectionMembre from '../assets/css/sectionMembres.css';
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
			return setError('Votre e-mail ou votre mot de passe est incorrect.');
		}
		setLoading(false);
		history.push('/dashboard');
	};

	return (
		<>
			<div className='bg-darkBlueCust w-full h-48 pt-20'>
				<div className='text-white text-center bg-darkBlueCust pt-5'>
					<h1 className='text-5xl'>Espace membre</h1>
				</div>
			</div>
			<video className='z-n1 absolute w-screen h-screen object-cover' autoPlay loop muted>
				<source src='https://firebasestorage.googleapis.com/v0/b/infm-773d8.appspot.com/o/infm-live.mp4?alt=media&token=05502d75-50e1-4ce0-aa05-7c07563806ba' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div>
				<SectionMembre>
					<div className='flex bg-transparent justify-center'>
						<div className='w-86 h-64  mt-10 bg-darkBlueCust text-white flex justify-center rounded-xl shadow-md py-4 px-8'>
							<form onSubmit={handleSubmit}>
								<div>
									<label htmlFor='email'>Adresse e-mail</label>
									<input type='email' ref={emailRef} className='w-full p-2 text-primary text-black border outline-none text-sm transition duration-150 ease-in-out mt-2 mb-4' id='email' placeholder='Votre e-mail' required />
								</div>
								<div>
									<label htmlFor='password'>Mot de passe</label>
									<input type='password' ref={passwordRef} className='w-full p-2 text-primary text-black border outline-none text-sm transition duration-150 ease-in-out mt-2 mb-2' id='password' placeholder='Votre mot de passe' required />
								</div>
								{error && <p className='text-xs text-yellowCust'>{error}</p>}
								<div className='flex flex-col justify-center items-center'>
									<button disabled={loading} type='submit' className='mt-3 py-2 px-4 text-sm bg-yellowCust text-black rounded focus:outline-none hover:bg-yellow-400 transition duration-200'>
										Se connecter
									</button>
								</div>
							</form>
						</div>
					</div>
				</SectionMembre>
			</div>
		</>
	);
};

export default Login;
