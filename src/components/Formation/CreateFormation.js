import React, { useState, useEffect } from 'react';
import '../../assets/css/Inputs.css';
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
		<div className='w-full flex-grow sm:w-80 md:w-80 mb-10 p-12 shadow-md rounded'>
			<form className='' onSubmit={handleSubmit}>
				<h2 className='text-2xl text-center font-light text-primary mt-0 mb-8'>Créer une formation</h2>
				{error && <p className='text-sm text-red-400 mb-5'>{error}</p>}
				<div className='inline'>
					<div className='md-input-main font-sans text-lg mt-8 w-64'>
						<div className='md-input-box relative'>
							<input type='text' className='md-input w-full text-black ' placeholder=' ' onChange={(e) => setNameFormation(e.target.value)} required value={nameFormation} />
							<label className='text md-label absolute pointer-events-none block text-darkBlueCust' htmlFor='name'>
								Nom de la formation
							</label>
							<div className={`md-input-underline absolute left-0 right-0 pointer-events-none ${error && 'error'}`} />
						</div>
					</div>
					<div className='md-input-main font-sans text-lg mt-5 mb-5'>
						<div className='md-input-box relative'>
							<input type='url' className='md-input w-full text-black ' placeholder=' ' onChange={(e) => setUrl(e.target.value)} required value={url} />
							<label className='text md-label absolute pointer-events-none block text-darkBlueCust' htmlFor='url'>
								URL de la vidéo
							</label>
							<div className='md-input-underline absolute left-0 right-0 pointer-events-none' />
						</div>
					</div>
					<div className='flex md:justify-center px-16 md:px-0'>
						<button type='submit' className='bg-darkBlueCust mt-2 py-2 px-6 text-md text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300'>
							Ajouter
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateFormation;
