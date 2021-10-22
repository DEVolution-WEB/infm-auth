import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import AdminPage from '../../pages/AdminPage';
import UserPage from '../../pages/UserPage';
import '../../assets/css/fonts/font.css';
import '../../assets/css/section.css';
import Footer from '../Layout/Footer';

const CheckAuth = () => {
	const [admin, setAdmin] = useState(false);
	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser.email === 'admin@dev.team' || currentUser.email === 'admin@infm.live') {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, []);

	return (
		<>
			<div className='bg-white h-screen'>
				<div>
					<div>{admin ? <AdminPage admin={admin} setAdmin={setAdmin} /> : <UserPage currentUser={currentUser} />}</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default CheckAuth;
