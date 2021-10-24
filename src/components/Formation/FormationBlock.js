import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useGlobalContext } from '../../context';
import Editformation from './EditFormation';
import DeleteFormation from './DeleteFormation';

const FormationBlock = () => {
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
		<div className='w-full flex-grow sm:w-80 md:w-80 mb-10 p-12 shadow-md rounded'>
			<div>
				<h2 className='text-2xl text-center font-light text-primary mt-0 mb-8'>Modifier une formation</h2>
				<div className='inline mb-2 space-x-36'>
					<div className='w-full max-w-4xl'>
						<select className='block w-full bg-gray-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust' name='user' onChange={(e) => setQuery(e.target.value)}>
							<option disabled selected>
								Choisir une formation...
							</option>
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
							<DeleteFormation id={id} handleDeleteFormations={handleDeleteFormations} />
							{!edit ? (
								<div class='flex justify-center mt-8'>
									<button onClick={() => setEdit(!edit)} className='w-full bg-darkBlueCust mt-3 mr-2 py-2 px-6 text-md text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
										Editer
									</button>
									<button onClick={() => setModalForma(!modalForma)} className='w-full bg-delete mt-3 py-2 px-6 text-md text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
										Supprimer
									</button>
								</div>
							) : (
								<div className='bg-white' key={id}>
									<Editformation edit={edit} setEdit={setEdit} handleEditFormations={handleEditFormations} id={id} videoURL={video_url} nameFormation={formation_name} setNameFormation={setNameFormation} setUrl={setUrl} setFormationId={setFormationId} />
								</div>
							)}
						</div>
					))}
			</div>
		</div>
	);
};

export default FormationBlock;
