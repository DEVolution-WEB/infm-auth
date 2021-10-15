import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Edituser from './EditUser';
import blueSep from '../assets/darkBlueSep.png';

const SelectedUsers = () => {
	const { users } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationId, setFormationId] = useState('');

	const handleEditUsers = async (id) => {
		//   UPDATE USERS FROM DATABASE
		await updateDoc(doc(db, 'users', id), {
			user_name: userName,
			email: email,
			formation_id: formationId,
		})
			.then(() => alert('Modifier avec success'))
			.catch(() => alert('Erreur'));
	};

	const handleDeleteUsers = async (id) => {
		// DELETE USERS FROM DATABASE
		await deleteDoc(doc(db, 'users', id));
	};

	return (
		<>
			<div className="w-full bg-white py-12 px-10">
				<div>
					<div className="text-black text-center pt-6 pb-6">
						<h1 className="text-5xl">Utilisateurs inscrit</h1>
						<div className="flex items-center justify-center pt-8 pb-6">
							<img
								className="pointer-events-none"
								src={blueSep}
								alt="separateur jaune"
							></img>
						</div>
					</div>
					<div className="flex justify-center mb-10 space-x-36">
						<div className="w-full max-w-4xl">
							<label htmlFor="user">
								Liste des Utilisateurs:
							</label>
							<select
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
								name="user"
								onChange={(e) => setQuery(e.target.value)}
							>
								<option></option>
								{users
									.sort()
									.map(({ id, data: { user_name } }) => (
										<option key={id} value={user_name}>
											{user_name}
										</option>
									))}
							</select>
						</div>
					</div>
				</div>
			</div>

			{users
				.filter(({ id, data: { user_name } }) => user_name === query)
				.map(
					(
						{
							id,
							data: {
								user_name,
								email,
								formation_id,
								created_date,
							},
						},
						index
					) => (
						<div className="bg-grey-light" key={index}>
							<p className="py-1">nom: {user_name}</p>
							<p className="py-1">Email: {email}</p>
							<p className="py-1">Formation id: {formation_id}</p>
							<p className="py-1">
								Date de création: {created_date}
							</p>
							<button
								onClick={() => setEdit(!edit)}
								className="bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
							>
								Editer
							</button>
							<button
								onClick={() => handleDeleteUsers(id)}
								className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
							>
								Suprimer
							</button>
							{edit && (
								<Edituser
									edit={edit}
									setEdit={setEdit}
									handleEditUsers={handleEditUsers}
									id={id}
									setUserName={setUserName}
									setEmail={setEmail}
									setFormationId={setFormationId}
								/>
							)}
						</div>
					)
				)}
		</>
	);
};

export default SelectedUsers;
