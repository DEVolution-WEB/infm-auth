import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Edituser from './EditUser';
// import { getAuth, deleteUser } from "firebase/auth";
import Modal from './DeleteUser';

const UserBlock = ({ error }) => {
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
			.then(() => alert('Modifié avec success'))
			.catch(() => alert('Erreur'));
	};

	const handleDeleteUsers = async (id) => {
		// DELETE USERS FROM DATABASE

		await deleteDoc(doc(db, 'users', id));
	};

	return (
		<div className="inline">
			<div className="flex space-x-32">
				<div className="mb-6 py-15 px-10 md:px-0">
					<div className="mb-10 p-12 shadow-md rounded">
						<h2 className="text-2xl px-5 font-light text-primary mt-0 mb-8">
							Modifier un utilisateur
						</h2>

						<div className="w-64">
							<label
								htmlFor="user"
								className=" text-black opacity-80 text-md mb-2"
							>
								Liste des Utilisateurs:
							</label>
							<select
								className="w-64 block bg-gray-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
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
							<div className="bg-white py-5 px-10 md:px-0 mb-6">
								<div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Nom:
										</h1>
										<p className="text-lg text-black">
											{user_name}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Email:
										</h1>
										<p className="text-lg text-black">
											{email}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Formation:
										</h1>
										<p className="text-lg text-black">
											{formation_id}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Date de création:
										</h1>
										<p className="text-lg text-black">
											{created_date}
										</p>
									</div>
									<div className="flex px-8 md:justify-center md:px-0">
										<button
											onClick={() => setEdit(!edit)}
											className="bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300"
										>
											Modifier
										</button>
										<button
											onClick={() => setModal(!modal)}
											className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300"
										>
											Supprimer
										</button>
									</div>
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
										error={error}
									/>
								)}
							</div>
						</div>
					)
				)}
		</div>
	);
};

export default UserBlock;