import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import SelectedUsers from './SelectedUsers';
import yellowSep from '../assets/yellowSep.png';
import Signup from './Signup';
import { useGlobalContext } from '../context';
import CustomSection from './CustomSection';
import Createvideo from './CreateVideo';

const CreateUser = ({ admin }) => {
	const { setUsers, formations } = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationName, setFormationName] = useState('');

	const date = new Date().toLocaleDateString();

	const handleSubmit = async (e) => {
		// ADD USERS TO DATABASE
		e.preventDefault();
		await addDoc(collection(db, 'users'), {
			user_name: userName,
			email: email,
			formation_id: formationName,
			created_date: date,
		}).then(() => {
			alert('Utilisateur ajouté');
			setUserName('');
			setEmail('');
			setFormationName('');
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
							<label htmlFor="name">Nom d'utilisateur</label>
							<input
								type="text"
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								placeholder="Utilisateur"
								onChange={(e) => setUserName(e.target.value)}
								required
								value={userName}
							/>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								placeholder="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
							/>

							<label htmlFor="user">Liste des Formations:</label>
							<select
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								name="user"
								onChange={(e) =>
									setFormationName(e.target.value)
								}
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

							<button
								type="submit"
								className="bg-darkBlueCust mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
							>
								Créer
							</button>
							<div className=" flex flex-col justify-around mt-2 mb-0">
								{/* {admin && (
									<Link to="./update-profile">
										Modifier les identifiant de connexion{' '}
									</Link>
								)} */}
							</div>
						</form>
					</div>
				</CustomSection>
				{admin && <Createvideo />}
			</div>

			<SelectedUsers />
		</div>
	);
};

export default CreateUser;
