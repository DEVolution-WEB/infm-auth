import React from 'react';
import CustomSection from './CustomSection';
import { useGlobalContext } from '../context';

const Edituser = ({
	edit,
	setEdit,
	id,
	handleEditUsers,
	setFormationId,
	setUserName,
}) => {
	const { formations } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		handleEditUsers(id);
		setEdit(!edit);
	};
	return (
		<div>
			<div class="bg-gray-100">
				<div className="w-32 mb-10 py-12 inline">
					<form className="max-w-4xl" onSubmit={handleSubmit}>
					<div className="w-64">
						<label htmlFor="name">Nom d'utilisateur</label>
						<input
							type="text"
							className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
							placeholder="Utilisateur"
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
						</div>
						
						<div className="w-64">
						<label htmlFor="formationid">Formation:</label>
						<input
							type="text"
							className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
							placeholder="Formation"
							onChange={(e) => setFormationId(e.target.value)}
							required
						/>
						</div>
						<div class="flex justify-center">
						<button
							onClick={() => setEdit(!edit)}
							className="bg-darkBlueCust mt-2 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
						>
							Annuler
						</button>

						<button className="bg-darkBlueCust mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light">
							Modifier
						</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edituser;
