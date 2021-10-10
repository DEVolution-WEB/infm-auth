import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError('');
		try {
			await logout();
			history.push('/login');
		} catch (error) {
			setError('Échec de la déconnexion');
		}
	}

	return (
		<div className="h-screen flex bg-gray-bg1">
			{error && <p className="bg-warning p-3 rounded-md">{error}</p>}
			<div className="h-5/6 w-full max-w-screen-lg m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-5 px-16">
				<h1 className="text-2xl font-medium text-primary mt-0 mb-12 text-center">
					Dashbord
				</h1>
				<div className="mt-2 mb-0">
					<strong>Address e-mail: {currentUser.email} </strong>
					<Link to="./update-profile">Modifier le profil </Link>
					<button
						className="bg-blue py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
						onClick={handleLogout}
					>
						Se déconnecter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
