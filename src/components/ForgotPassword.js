import React, { useState, useRef } from 'react';
import { useAuth } from '../AuthContext';
import '../assets/css/Modal.css';

const Forgotpassword = ({ forgotPassword, setForgotPassword }) => {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handlereset = async (e) => {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage(
				'Consultez votre boîte de réception pour suivre les instructions.'
			);
		} catch (error) {
			setError('Échec de réinitialisation du mot de passe');
		}
		setLoading(false);
		emailRef.current.value = '';
	};

	return (
		<>
			<div
				className={`modal-screen ${
					forgotPassword && 'open'
				} h-screen flex bg-grey-light`}
			>
				<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
					<h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
						Mot de passe oublié
					</h1>
					{error && (
						<div>
							<p className="bg-warning p-3 rounded-md">{error}</p>
						</div>
					)}
					{message && (
						<p className="text-sm text-green-500 p-3 rounded-md">
							{message}
						</p>
					)}
					<form onSubmit={handlereset}>
						<label htmlFor="email">Adresse email</label>
						<input
							type="email"
							ref={emailRef}
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							id="email"
							placeholder="Votre e-mail"
							required
						/>

						<div className="flex justify-center items-center mt-6">
							<button
								disabled={loading}
								type="submit"
								className="bg-darkBlueCust py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
							>
								Réinitialiser mot de passe
							</button>
						</div>
						<div
							onClick={() => setForgotPassword(!forgotPassword)}
							className="cursor-pointer w-full text-center mt-3 mb-3"
						>
							Retour
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Forgotpassword;
