import React, { useState } from 'react';
import blueSep from '../assets/darkBlueSep.png';
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
		<div className="w-full bg-white py-5 px-10">
			<div>
				<div className="text-black text-center pt-6 pb-6">
					<h2 className="text-5xl">Formations Disponible</h2>
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
						<label htmlFor="user">Liste des Formations:</label>
						<select
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							name="user"
							onChange={(e) => setQuery(e.target.value)}
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
					</div>
				</div>

				{formations
					.filter(
						({ data: { formation_name } }) =>
							formation_name === query
					)
					.map(({ id, data: { formation_name, video_url } }) => (
						<div key={id}>
							<ModalForma
								id={id}
								handleDeleteFormations={handleDeleteFormations}
							/>
							<div className="bg-white py-5 px-20">
								<div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											Nom de la formation:
										</h1>
										<p className="text-xl text-black">
											{formation_name}
										</p>
									</div>
									<div className="flex mb-5 space-x-2">
										<h1 className="text-xl text-black">
											URL Video:
										</h1>
										<p className="text-xl text-black">
											{video_url}
										</p>
									</div>

									<button
										onClick={() => setEdit(!edit)}
										className="bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
									>
										Editer
									</button>
									<button
										onClick={() =>
											setModalForma(!modalForma)
										}
										className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
									>
										Suprimer
									</button>
								</div>
							</div>
							<div className="bg-grey-light" key={id}>
								{edit && (
									<Editformation
										edit={edit}
										setEdit={setEdit}
										handleEditFormations={
											handleEditFormations
										}
										id={id}
										setNameFormation={setNameFormation}
										setUrl={setUrl}
										setFormationId={setFormationId}
									/>
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Selectedformations;
