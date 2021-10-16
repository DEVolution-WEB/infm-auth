import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import CreateUser from './CreateUser';
import Userpage from './Userpage';
import yellowSep from '../assets/yellowSep.png';
import blueSep from '../assets/darkBlueSep.png';
import '../assets/css/fonts/font.css';
import '../assets/css/section.css';
import CustomSection from './CustomSection';

const Dashboard = () => {
	const [error, setError] = useState('');
	const [admin, setAdmin] = useState(false);
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			history.push('/');
		} catch (error) {
			setError('Échec de la déconnexion');
		}
	};

	useEffect(() => {
		if (currentUser.email === 'admin@dev.team') {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, []);

	console.log(currentUser);

	return (
		<>
			<div className="bg-white py-12">
				<div>
					{error && (
						<p className="bg-warning p-3 rounded-md">{error}</p>
					)}
					<div>
						{admin ? (
							<CreateUser admin={admin} setAdmin={setAdmin} />
						) : (
							<Userpage currentUser={currentUser} />
						)}
					</div>
				</div>
				<button
					className="bg-darkBlueCust my-8 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
					onClick={handleLogout}
				>
					Se déconnecter
				</button>
				<CustomSection>
					<div>
						<div className="text-black text-center pt-12 pb-6">
							<h1 className="text-5xl">
								Ceci est un autre exemple de titre
							</h1>
							<div className="flex items-center justify-center pt-8 pb-6">
								<img
									className="pointer-events-none"
									src={yellowSep}
									alt="separateur jaune"
								></img>
							</div>
						</div>

						<div className="flex justify-center mb-10 space-x-36">
							<div>
								<h1 className="text-4xl text-black">
									Ceci est un test super long la la la la la
									la la la la
								</h1>
							</div>

							<div>
								<h1 className="text-4xl text-black">
									Ceci est un test super long la la la la la
									la la la la
								</h1>
							</div>
						</div>
					</div>
				</CustomSection>

				<div className="bg-white py-12 px-10">
					<div>
						<div className="text-black text-center pt-6 pb-6">
							<h1 className="text-5xl">
								Ceci est un autre exemple de titre
							</h1>
							<div className="flex items-center justify-center pt-8 pb-6">
								<img
									className="pointer-events-none"
									src={blueSep}
									alt="separateur jaune"
								></img>
							</div>
						</div>

						<div className="flex justify-center mb-10 space-x-36">
							<div>
								<h1 className="text-4xl text-black">
									Ceci est un test super long la la la la la
									la la la la
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
