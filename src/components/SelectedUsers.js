import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Edituser from './EditUser';
import blueSep from '../assets/darkBlueSep.png';
import Modal from './Modal';

const SelectedUsers = () => {
	const { users, modal, setModal } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationId, setFormationId] = useState('');

	const handleEditUsers = async (id) => {
		//   UPDATE USERS FROM DATABASE
		await updateDoc(doc(db, 'users', id), {
			user_name: userName,
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
			<div className="w-full bg-white py-5 px-10">
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
				<div className="flex justify-center mb-2 space-x-36">
					<div className="w-full max-w-4xl">
						<h2 className="text-xl font-medium text-primary mt-0 mb-8">
							Modifier un utilisateur
						</h2>
						<label htmlFor="user">Liste des Utilisateurs:</label>
						<select
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							name="user"
							onChange={(e) => setQuery(e.target.value)}
						>
							<option></option>
							{users.sort().map(({ id, data: { user_name } }) => (
								<option key={id} value={user_name}>
									{user_name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			{users
				.filter(({ data: { user_name } }) => user_name === query)
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
						<div key={index}>
							<Modal
								id={id}
								handleDeleteUsers={handleDeleteUsers}
							/>
							<div className="bg-white py-5 px-20">
								<div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											nom:
										</h1>
										<p className="text-xl text-black">
											{user_name}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Email:
										</h1>
										<p className="text-xl text-black">
											{email}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Formation:
										</h1>
										<p className="text-xl text-black">
											{formation_id}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Date de création:
										</h1>
										<p className="text-xl text-black">
											{created_date}
										</p>
									</div>
									<button
										onClick={() => setEdit(!edit)}
										className="bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
									>
										Editer
									</button>
									<button
										onClick={() => setModal(!modal)}
										className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
									>
										Suprimer
									</button>
								</div>
							</div>
							<div className="bg-grey-light" key={index}>
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
						</div>
					)
				)}
		</>
	);
};

export default SelectedUsers;
