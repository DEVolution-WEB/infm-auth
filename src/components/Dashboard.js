import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './navbar/NavBar';
import CreateUser from './CreateUser';
import Userpage from './Userpage';

const Dashboard = () => {
	const [error, setError] = useState('');
	const [admin, setAdmin] = useState(false);
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			history.push('/login');
		} catch (error) {
			setError('Échec de la déconnexion');
		}
	};
	useEffect(() => {
		if (currentUser.email === 'ssabril@ymail.com') {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, []);

	console.log(currentUser);

	return (
		<div className="h-screen">
			<Navbar />
			{error && <p className="bg-warning p-3 rounded-md">{error}</p>}
			<div className="w-full max-w-screen-lg m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-5 px-16">
				{admin ? (
					<CreateUser />
				) : (
					<Userpage currentUser={currentUser} />
				)}
				<div className=" flex flex-col justify-around mt-2 mb-0">
					<button
						className="bg-blue my-8 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
						onClick={handleLogout}
					>
						Se déconnecter
					</button>
					{admin && (
						<Link to="./update-profile">
							Modifier les identifiant de connexion{' '}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
