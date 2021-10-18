import React, { useState, useEffect } from 'react';
import yellowSep from '../assets/yellowSep.png';
import { useGlobalContext } from '../context';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Selectedformations from './SelectedFormations';

const Createvideo = () => {
	const { formations, setFormations } = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [nameFormation, setNameFormation] = useState('');
	const [formationId, setFormationId] = useState('');
	const [url, setUrl] = useState('');

	const date = new Date().toLocaleDateString();

	const handleSubmit = async (e) => {
		// ADD FORMATION TO DATABASE
		e.preventDefault();
		await addDoc(collection(db, 'formations'), {
			formation_name: nameFormation,
			video_url: url,
			created_date: date,
		}).then(() => {
			alert('Formation ajouté');
			setNameFormation('');
			setFormationId('');
			setUrl('');
		});
	};
	const getFormations = () => {
		// GET FORMATIONS FROM DATABASE
		setLoading(true);
		db.collection('formations').onSnapshot((Snapshot) => {
			setFormations(
				Snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
		setLoading(false);
	};

	useEffect(() => {
		getFormations();
	}, []);

	return (
		<div>
			<div className=" text-darkBlueCust text-center pt-12 pb-6">
				<h1 className="text-5xl">Gestion Formation</h1>
				<div className="flex items-center justify-center pt-8 pb-6">
					<img
						className="pointer-events-none"
						src={yellowSep}
						alt="separateur jaune"
					></img>
				</div>
			</div>

			<div className="w-full mb-10 py-15 px-10">
				<form className="max-w-4xl" onSubmit={handleSubmit}>
					<h2 className="text-xl font-medium text-primary mt-0 mb-8">
						Créer une nouvelle Formation
					</h2>
					<label htmlFor="name">Nom de la formation</label>
					<input
						type="text"
						className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
						placeholder="Formation"
						required
						value={nameFormation}
						onChange={(e) => setNameFormation(e.target.value)}
					/>
					<label htmlFor="email">URL Video</label>
					<input
						type="url"
						className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
						placeholder="https://"
						required
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-darkBlueCust mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
					>
						Ajouté
					</button>
				</form>
			</div>
			<Selectedformations />
		</div>
	);
};

export default Createvideo;
