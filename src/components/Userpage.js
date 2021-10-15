import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useGlobalContext } from '../context';

const Userpage = ({ currentUser }) => {
	const { users, setUsers } = useGlobalContext();
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
	};

	useEffect(() => {
		getUsers();
	}, []);

	// const filteredUser = users.filter(
	// 	(user) => user.data.email === currentUser.email
	// );
	console.log(users);
	return (
		<div>
			{users
				.filter(({ data: { email } }) => email === currentUser.email)
				.map(({ id, data: { formation_id } }) => (
					<div key={id}>
						<div>
							<h2>Page utilisateur</h2>
							<strong>Nom: {currentUser.displayName} </strong>
							<strong>
								Address e-mail: {currentUser.email}{' '}
							</strong>
							<strong>Formation-id: {formation_id}</strong>
						</div>
						<div className="pt-48 relative">
							<iframe
								src="https://player.vimeo.com/video/612967680?h=88610b9112&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
	);
};

export default Userpage;
