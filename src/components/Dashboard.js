import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import CreateUser from './CreateUser';
import Userpage from './Userpage';
import yellowSep from '../assets/yellowSep.png';
import blueSep from '../assets/darkBlueSep.png';
import '../assets/css/fonts/font.css';
import '../assets/css/section.css';

const Dashboard = () => {
	// const [error, setError] = useState('');
	const [admin, setAdmin] = useState(false);
	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser.email === 'admin@dev.team') {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, []);

	return (
		<>
			<div className="bg-white py-12">
				<div>
					<div>
						{admin ? (
							<CreateUser admin={admin} setAdmin={setAdmin} />
						) : (
							<Userpage currentUser={currentUser} />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
