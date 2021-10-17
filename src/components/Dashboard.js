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
					{/* {error && (
						<p className="bg-warning p-3 rounded-md">{error}</p>
					)} */}
					<div>
						{admin ? (
							<CreateUser admin={admin} setAdmin={setAdmin} />
						) : (
							<Userpage currentUser={currentUser} />
						)}
					</div>
				</div>

				{/* <div className="bg-white py-12 px-10">
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
				</div> */}
			</div>
		</>
	);
};

export default Dashboard;
