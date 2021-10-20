import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useGlobalContext } from '../context';
import SectionMembre from './SectionMembre';

const Userpage = ({ currentUser }) => {
	const {
		users,
		setUsers,
		formations,
		setFormations,
		isFetched,
		setIsFetched,
	} = useGlobalContext();
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

	const activeUser = users.find(
		(user) => user.data.email === currentUser.email
	);

	return (
		<div>
				<div class="bg-darkBlueCust w-full h-46 md:h-40 pt-28 md:pt-24">
						<div className="text-white text-center bg-darkBlueCust pb-5">
							<h1 className="text-5xl ">Formation {activeUser?.data.formation_id}</h1>
						</div>
				</div>
			
	<SectionMembre>
					
					
		<div className="pt-6">
			{isFetched &&
				formations
					.filter(
						(formation) =>
							formation.data.formation_name ===
							activeUser?.data.formation_id
					)
					.map(({ id, data: { video_url } }) => (
						<div key={id}>
							<div className="pt-48 relative pb-32">
								<iframe
									src={video_url}
									frameBorder="0"
									allow="autoplay; fullscreen; picture-in-picture"
									allowFullScreen
									className="absolute top-0 left-0 w-full h-full"
									title="Pr&amp;eacute;sentation de l&amp;#039;INFM"
								></iframe>
							</div>
						</div>
					))}
		</div>
		</SectionMembre>
		</div>
	);
};

export default Userpage;