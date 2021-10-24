import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useGlobalContext } from '../../context';
import Editformation from './EditFormation';
import ModalForma from './DeleteFormation';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FormationBlock = () => {
	const { formations, modalForma, setModalForma } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [nameFormation, setNameFormation] = useState('');
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

	const selectedFormations = formations.map((data) => data.data);

	return (
		<div className='w-full flex-grow sm:w-80 md:w-80 mb-10 p-12 shadow-md rounded'>
			<div>
				<h2 className="text-2xl px-5 font-light text-primary mt-0 mb-8">
					Modifier une formation
				</h2>
				<div className="inline mb-2 space-x-36">
					<div className="w-64 max-w-4xl">
						<Autocomplete
							fullWidth="true"
							disablePortal
							onChange={(event, value) =>
								setQuery(value?.formation_name)
							}
							id="combo-box-demo"
							options={selectedFormations}
							// sx={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Liste des Formations"
									variant="standard"
									color="warning"
								/>
							)}
							getOptionLabel={(option) =>
								`${option?.formation_name} `
							}
						/>
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
