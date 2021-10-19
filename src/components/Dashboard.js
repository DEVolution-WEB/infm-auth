import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import CreateUser from './CreateUser';
import Userpage from './Userpage';
import '../assets/css/fonts/font.css';
import '../assets/css/section.css';
import Footer from './Footer';

const Dashboard = () => {
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
			<div className="bg-white h-screen">
				<div>
					<div>
						{admin ? (
							<CreateUser admin={admin} setAdmin={setAdmin} />
						) : (
							<Userpage currentUser={currentUser} />
						)}
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
