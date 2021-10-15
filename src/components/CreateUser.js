import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import SelectedUsers from './SelectedUsers';
import Signup from './Signup';
import { useGlobalContext } from '../context';

const CreateUser = () => {
	const { users, setUsers } = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [isFetched, setIsFetched] = useState(true);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationId, setFormationId] = useState('');

	const date = new Date().toLocaleDateString();

	const handleSubmit = async (e) => {
		// ADD USERS TO DATABASE
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'users'), {
			user_name: userName,
			email: email,
			formation_id: formationId,
			created_date: date,
		}).then(() => {
			alert('Utilisateur ajouté');
			setUserName('');
			setEmail('');
			setFormationId('');
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
			setIsFetched(true);
		});
		setLoading(false);
	};

	useEffect(() => {
		getUsers();
	}, []);
	console.log(users);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1 className="text-2xl font-medium text-primary mt-0 mb-5 text-center">
					Dashbord Admin
				</h1>
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

				<label htmlFor="formationid">Formation Id</label>
				<input
					type="number"
					className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
					placeholder="Identifiant formation"
					onChange={(e) => setFormationId(e.target.value)}
					required
					value={formationId}
				/>

				<button
					type="submit"
					className="bg-blue mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
				>
					Créer
				</button>
			</form>

			<SelectedUsers isFetched={isFetched} />

			{/* <Signup /> */}
		</div>
	);
};

export default CreateUser;
