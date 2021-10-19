import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
import { usePasswordValidation } from './usePasswordValidation';
import { collection, addDoc } from 'firebase/firestore';
import SelectedUsers from './SelectedUsers';
import yellowSep from '../assets/yellowSep.png';
import { useGlobalContext } from '../context';
import { useAuth } from '../AuthContext';
import CustomSection from './CustomSection';
import Createvideo from './CreateVideo';
import Validpassword from './ValidPassword';
import '../assets/css/App.css';
import ForgotPassword from './ForgotPassword';

const CreateUser = ({ admin }) => {
	const {
		users,
		setUsers,
		formations,
		password,
		setPassword,
		activeBtn,
		setActiveBtn,
		logout,
	} = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationName, setFormationName] = useState('');
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const history = useHistory();

	// password validation //
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
	const currentUser = users.find((user) => user.data.user_name === userName);

	const date = new Date().toLocaleDateString();

	const handleSubmit = async (e) => {
		// ADD USERS TO DATABASE
		e.preventDefault(); // prevent creating multiple users with same name
		if (currentUser?.data.user_name === userName) {
			return setError(`Le nom d'utilisateur ${userName} existe déja`);
		}
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Les mots de passe ne correspondent pas!');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			return setError('Impossible de créer un compte');
		}
		setLoading(false);

		// create database
		await addDoc(collection(db, 'users'), {
			user_name: userName,
			email: email,
			formation_id: formationName,
			created_date: date,
		}).then(() => {
			setUserName('');
			setEmail('');
			setFormationName('');
			passwordRef.current.value = '';
			passwordConfirmRef.current.value = '';
		});
	};

	const getUsers = () => {
		// GET USERS FROM DATABASE
		setLoading(true);
		db.collection('users').onSnapshot((Snapshot) => {
			setUsers(
				Snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
			setLoading(false);
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<div>
				<CustomSection>
					<div className="text-darkBlueCust text-center pt-5 pb-6">
						<h1 className="text-5xl">Dashbord Admin</h1>
						<div className="flex items-center justify-center pt-8 pb-6">
							<img
								className="pointer-events-none"
								src={yellowSep}
								alt="separateur jaune"
							></img>
						</div>
					</div>
					{/* <Signup /> */}
					<div className="w-full mb-10 py-15 px-10">
						<form className="max-w-4xl" onSubmit={handleSubmit}>
							<h2 className="text-xl font-medium text-primary mt-0 mb-8">
								Créer un nouvel utilisateur
							</h2>
							{error && (
								<p className="text-sm text-red-400 mb-5">
									{error}
								</p>
							)}
							<label htmlFor="name">Nom</label>
							<input
								type="text"
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								placeholder="Utilisateur"
								onChange={(e) => setUserName(e.target.value)}
								required
								value={userName}
							/>
							<label htmlFor="email">Adresse e-mail</label>
							<input
								type="email"
								ref={emailRef}
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								placeholder="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
							/>
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
							<label htmlFor="user">Liste des Formations:</label>
							<select
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								name="user"
								onChange={(e) =>
									setFormationName(e.target.value)
								}
								required
							>
								<option></option>
								{formations
									.sort()
									.map(({ id, data: { formation_name } }) => (
										<option key={id} value={formation_name}>
											{formation_name}
										</option>
									))}
							</select>
							<div className="flex justify-center items-center">
								<Validpassword
									validLength={validLength}
									hasNumber={hasNumber}
									upperCase={upperCase}
									lowerCase={lowerCase}
									match={match}
								/>
							</div>

							{/* permet a djamel de modifier sont mot de pas donc optionel */}
							<button
								className={`bg-darkBlueCust py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light ${
									activeBtn ? '' : 'hidden'
								}`}
								type="submit"
								disabled={!activeBtn}
							>
								Créer un compte
							</button>
						</form>
						<ForgotPassword
							forgotPassword={forgotPassword}
							setForgotPassword={setForgotPassword}
						/>
						<div
							onClick={() => setForgotPassword(!forgotPassword)}
							className="cursor-pointer mt-3 mb-3"
						>
							<p>Mot de passe oublié</p>
						</div>
					</div>
				</CustomSection>
				{admin && <Createvideo />}
			</div>
			<SelectedUsers />
		</div>
	);
};

export default CreateUser;
