import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useGlobalContext } from '../context';
import Editformation from './EditFormation';
import ModalForma from './ModalForma';

const Selectedformations = () => {
	const { formations, modalForma, setModalForma } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [nameFormation, setNameFormation] = useState('');
	const [formationId, setFormationId] = useState('');
	const [url, setUrl] = useState('');

	const handleEditFormations = async (id) => {
		//   UPDATE FORMATIONS FROM DATABASE
		await updateDoc(doc(db, 'formations', id), {
			formation_name: nameFormation,
			formation_id: formationId,
			video_url: url,
		})
			.then(() => alert('Modifier avec success'))
			.catch(() => alert('Erreur'));
	};

	const handleDeleteFormations = async (id) => {
		// DELETE FORMATIONS FROM DATABASE
		await deleteDoc(doc(db, 'formations', id));
	};

	return (
		<div className='bg-white px-10'>
			<div>
				<h2 className='text-2xl font-medium text-primary mt-0 mb-8'>Modifier une Formation</h2>
				<div className='inline mb-2 space-x-36'>
					<div className='w-64 max-w-4xl'>
						<label htmlFor='user'>Liste des Formations:</label>
						<select className='block w-full bg-gray-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust' name='user' onChange={(e) => setQuery(e.target.value)}>
							<option></option>
							{formations.sort().map(({ id, data: { formation_name } }) => (
								<option key={id} value={formation_name}>
									{formation_name}
								</option>
							))}
						</select>
					</div>
				</div>

				{formations
					.filter(({ data: { formation_name } }) => formation_name === query)
					.map(({ id, data: { formation_name, video_url } }) => (
						<div key={id}>
							<ModalForma id={id} handleDeleteFormations={handleDeleteFormations} />
							<div className='w-64 bg-white py-5 px-3'>
								<div>
									<div className='flex mb-5 space-x-2'>
										<h1 className='text-xl text-black'>Formation:</h1>
										<p className='text-md text-black '>{formation_name}</p>
									</div>
									<div className='flex mb-3 space-x-2'>
										<h1 className='text-xl text-black'>URL:</h1>
										<p className='text-md text-black overflow-x-scroll'>{video_url}</p>
									</div>
									<div class='flex justify-center'>
										<button onClick={() => setEdit(!edit)} className='bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
											Editer
										</button>
										<button onClick={() => setModalForma(!modalForma)} className='bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
											Supprimer
										</button>
									</div>
								</div>
							</div>
							<div className='bg-white' key={id}>
								{edit && <Editformation edit={edit} setEdit={setEdit} handleEditFormations={handleEditFormations} id={id} setNameFormation={setNameFormation} setUrl={setUrl} setFormationId={setFormationId} />}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Selectedformations;
