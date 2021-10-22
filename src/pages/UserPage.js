import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useGlobalContext } from '../context';
import HeaderTitle from '../components/Layout/HeaderTitle';

const UserPage = ({ currentUser }) => {
	const { users, setUsers, formations, setFormations, isFetched, setIsFetched } = useGlobalContext();
	const [loading, setLoading] = useState(false);

	const getUsers = () => {
		// GET USERS FROM DATABASE
		setLoading(true);
		db.collection('users').onSnapshot((Snapshot) => {
			setUsers(
				Snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
		setLoading(false);
		setIsFetched(true);
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
		setIsFetched(true);
	};

	useEffect(() => {
		getUsers();
		getFormations();
	}, []);

	const activeUser = users.find((user) => user.data.email === currentUser.email);

	return (
		<div>
			<HeaderTitle title={`Formation ${activeUser?.data.formation_id}`} />

			<div class='h-2/3 bg-white my-20'>
				<div className='pt-6'>
					{isFetched &&
						formations
							.filter((formation) => formation.data.formation_name === activeUser?.data.formation_id)
							.map(({ id, data: { video_url } }) => (
								<div key={id}>
									<div className='pt-48 relative pb-48'>
										<iframe src={video_url} frameBorder='0' allow='autoplay; fullscreen; picture-in-picture' allowFullScreen className='absolute top-0 left-0 w-full h-full' title="Présentation de l'INFM"></iframe>
									</div>
								</div>
							))}
				</div>
			</div>
		</div>
	);
};

export default UserPage;
