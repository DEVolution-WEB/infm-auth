import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateFormation = () => {
	const { formations, setFormations } = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const [nameFormation, setNameFormation] = useState('');
	const [formationId, setFormationId] = useState('');
	const [isFetched, setIsFetched] = useState(false);
	const [error, setError] = useState('');
	const [url, setUrl] = useState('');

	const date = new Date().toLocaleDateString();

	const currentFormation = formations.find((forma) => forma.data.formation_name === nameFormation);

	const handleSubmit = async (e) => {
		// ADD FORMATION TO DATABASE
		e.preventDefault(); // prevent creating multiple formation with same name
		if (currentFormation?.data.formation_name === nameFormation) {
			return setError(`La Formation ${nameFormation} existe déja`);
		}

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
			<div className='mb-10 p-12 shadow-md rounded'>
				<form className='' onSubmit={handleSubmit}>
					<h2 className='text-2xl px-5 font-light text-primary mt-0 mb-8'>Créer une nouvelle formation</h2>
					{error && <p className='text-sm text-red-400 mb-5'>{error}</p>}
					<div class='inline'>
						<div className='w-64'>
							<label className=' text-black opacity-80 text-md mb-2' htmlFor='name'>
								Nom de la formation
							</label>
							<input className='appearance-none block w-full bg-gray-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust' type='text' placeholder='Formation' value={nameFormation} required onChange={(e) => setNameFormation(e.target.value)} />
						</div>

						<div className='w-64'>
							<label className=' text-black opacity-80 text-md mb-2' htmlFor='email'>
								URL de la vidéo
							</label>
							<input className='appearance-none block w-full bg-gray-100 text-black opacity-80 text-sm border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust' type='url' placeholder='https://' value={url} required onChange={(e) => setUrl(e.target.value)} />
						</div>
						<div class='flex md:justify-center px-16 md:px-0'>
							<button type='submit' className='bg-darkBlueCust mt-2 py-2 px-6 text-md text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
								Ajouter
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateFormation;
