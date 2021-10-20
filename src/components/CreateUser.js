

import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
// import { useHistory } from 'react-router-dom';
import { usePasswordValidation } from './usePasswordValidation';
import { collection, addDoc } from 'firebase/firestore';
import SelectedUsers from './SelectedUsers';
import SelectedFormations from './SelectedFormations';
import yellowSep from '../assets/yellowSep.png';
import { useGlobalContext } from '../context';
import { useAuth } from '../AuthContext';
import CustomSection from './CustomSection';
import Createvideo from './CreateVideo';
import Validpassword from './ValidPassword';
import '../assets/css/App.css';
import ForgotPassword from './ForgotPassword';
import '../assets/css/Tabs.css';
import SectionMembre from './SectionMembre';


const CreateUser = ({ admin }) => {
	const {
		users,
		setUsers,
		formations,
		password,
		setPassword,
		activeBtn,
		setActiveBtn,
	} = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationName, setFormationName] = useState('');
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup, login } = useAuth();
	const [error, setError] = useState('');
	// const history = useHistory();

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

		setTimeout(async () => {
			await login('admin@dev.team', 'devteam');
			console.log('login');
		}, 3000);

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

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div>
				<div class="bg-darkBlueCust w-full h-46 md:h-40 pt-28 md:pt-24">
						<div className="text-white text-center bg-darkBlueCust pb-5">
							<h1 className="text-5xl ">Dashboard Admin </h1>
						</div>
				</div>
				<SectionMembre>
				
					<div className="bg-transparent mb-6 mt-6 w-1/3 items-center mx-auto">
						<nav className="flex sm:flex-row justify-center">
							<button
								className={
									toggleState === 1
										? 'tabs active-tabs'
										: 'tabs'
								}
								onClick={() => toggleTab(1)}
							>
								Gérer utilisateurs
							</button>
							<button
								className={
									toggleState === 2
										? 'tabs active-tabs'
										: 'tabs'
								}
								onClick={() => toggleTab(2)}
							>
								Gérer formations
							</button>
							<button
								className={
									toggleState === 3
										? 'tabs active-tabs'
										: 'tabs'
								}
								onClick={() => toggleTab(3)}
							>
								Gérer stats
							</button>
						</nav>
					</div>

					<div
						className={
							toggleState === 1
								? 'content  active-content'
								: 'content'
						}
					>
						<div className="inline md:flex md:justify-center md:space-x-32">
							<div className="mb-10 py-15 md:px-10">
								<h2 className="text-2xl font-medium text-primary mt-0 mb-8">
									Créer un nouvel utilisateur
								</h2>
								{error && (
									<p className="text-sm text-red-400 mb-5">
										{error}
									</p>
								)}
								<div className="inline">
									<form
										className="max-w-4xl"
										onSubmit={handleSubmit}
									>
										<div className="w-64">
											<label
												className=" text-black opacity-80 text-md mb-2"
												htmlFor="name"
											>
												Nom
											</label>
											<input
												type="text"
												className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
												placeholder="Utilisateur"
												onChange={(e) =>
													setUserName(e.target.value)
												}
												required
												value={userName}
											/>
										</div>

										<div className="w-64">
											<label
												className=" text-black opacity-80 text-md mb-2"
												htmlFor="email"
											>
												Adresse e-mail
											</label>
											<input
												type="email"
												ref={emailRef}
												className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
												placeholder="email"
												onChange={(e) =>
													setEmail(e.target.value)
												}
												required
												value={email}
											/>
										</div>

										<div className="w-64">
											<label
												className=" text-black opacity-80 text-md mb-2"
												htmlFor="password"
											>
												Mot de passe
											</label>
											<input
												type="password"
												ref={passwordRef}
												className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
												id="password"
												placeholder="Mot de passe"
												required
												onChange={setFirst}
											/>
										</div>

										<div className="w-64">
											<label
												className=" text-black opacity-80 text-md mb-2"
												htmlFor="password-confirm"
											>
												Confirmer votre mot de passe
											</label>
											<input
												type="password"
												ref={passwordConfirmRef}
												className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
												id="passwordconfirm"
												placeholder="Confirmer mot de passe"
												required
												onChange={setSecond}
											/>
										</div>

										<div className="w-64">
											<label
												className=" text-black opacity-80 text-md mb-2"
												htmlFor="user"
											>
												Liste des Formations:
											</label>
											<select
												className="w-full bg-red-100 text-black opacity-80 border-b border-white py-2 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
												name="user"
												onChange={(e) =>
													setFormationName(
														e.target.value
													)
												}
												required
											>
												<option></option>
												{formations
													.sort()
													.map(
														({
															id,
															data: {
																formation_name,
															},
														}) => (
															<option
																key={id}
																value={
																	formation_name
																}
															>
																{formation_name}
															</option>
														)
													)}
											</select>
										</div>
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
								</div>
								<div className="flex">
									<Validpassword
										validLength={validLength}
										hasNumber={hasNumber}
										upperCase={upperCase}
										lowerCase={lowerCase}
										match={match}
									/>
								</div>
							</div>
							<SelectedUsers />
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? 'content  active-content'
								: 'content'
						}
					>
						{admin && <Createvideo />}
						<SelectedFormations />
					</div>

					<div
						className={
							toggleState === 3
								? 'content  active-content'
								: 'content'
						}
					>
						<div className="bg-white h-96 px-10">
							<div>
								<h2 className="text-2xl font-medium text-primary mt-0 mb-8">
									Vos statistiques
								</h2>
							</div>
						</div>

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
							
						
				</SectionMembre>
		</div>
	);
};

export default CreateUser;
