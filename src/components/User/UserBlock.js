import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import EditUser from './EditUser';
import Modal from './DeleteUser';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const UserBlock = ({ error }) => {
	const { users, modal, setModal } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [formationName, setFormationName] = useState('');

	const handleEditUsers = async (id) => {
		//   UPDATE USERS FROM DATABASE
		await updateDoc(doc(db, 'users', id), {
			user_name: userName,
			formation_name: formationName,
		})
			.then(() => alert('Modifié avec success'))
			.catch(() => alert('Erreur'));
	};

	const handleDeleteUsers = async (id) => {
		// DELETE USERS FROM DATABASE

		await deleteDoc(doc(db, 'users', id));
	};

	const selectedUsers = users.map((data) => data.data);

	return (
		<div className='w-full flex-grow sm:w-80 md:w-80 mb-10 p-12 shadow-md rounded'>
			<h2 className='text-2xl text-center font-light text-primary mt-0 mb-8'>Modifier un utilisateur</h2>

			<div className='w-full'>
				<Autocomplete
					fullWidth='true'
					disablePortal
					onChange={(event, value) => setQuery(value?.user_name)}
					id='combo-box-demo'
					options={selectedUsers}
					// sx={{ width: 400 }}
					renderInput={(params) => <TextField {...params} label='Sélectionner utilisateur' variant='standard' color='warning' />}
					getOptionLabel={(option) => `${option?.user_name} `}
				/>
			</div>

			{users
				.filter(({ data: { user_name } }) => user_name === query)
				.map(({ id, data: { user_name, email, formation_name, created_date } }, index) => (
					<div key={index}>
						<Modal id={id} handleDeleteUsers={handleDeleteUsers} />
						{!edit ? (
							<div className='bg-white py-5 px-10 md:px-0 mb-6'>
								<div className='flex mb-5 space-x-2'>
									<p className=' text-black'>Nom:</p>
									<p className=' text-black text-darkBlueCust'>{user_name}</p>
								</div>
								<div className='flex mb-5 space-x-2'>
									<p className=' text-black'>Email:</p>
									<p className=' text-black text-darkBlueCust'>{email}</p>
								</div>
								<div className='flex mb-5 space-x-2'>
									<p className=' text-black'>Formation:</p>
									<p className=' text-black text-darkBlueCust'>{formation_name}</p>
								</div>
								<div className='flex mb-5 space-x-2'>
									<p className=' text-black'>Date de création:</p>
									<p className=' text-black text-darkBlueCust'>{created_date}</p>
								</div>
								<div className='flex px-8 md:justify-center mt-8 md:px-0'>
									<button onClick={() => setEdit(!edit)} className='w-full bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
										Modifier
									</button>
									<button onClick={() => setModal(!modal)} className='w-full bg-delete mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
										Supprimer
									</button>
								</div>
							</div>
						) : (
							<div className='bg-grey-light' key={index}>
								<EditUser edit={edit} setEdit={setEdit} handleEditUsers={handleEditUsers} id={id} userName={user_name} formationName={formation_name} setUserName={setUserName} setEmail={setEmail} setFormationName={setFormationName} error={error} />
							</div>
						)}
					</div>
				))}
		</div>
	);
};

export default UserBlock;
