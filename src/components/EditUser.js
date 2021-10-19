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
			<CustomSection>
				<div className="w-full mb-10 py-12 px-10">
					<form className="max-w-4xl" onSubmit={handleSubmit}>
						<h2 className="text-xl font-medium text-primary mt-0 mb-8">
							Modifier un utilisateur
						</h2>
						<label htmlFor="name">Nom d'utilisateur</label>
						<input
							type="text"
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							placeholder="Utilisateur"
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
						{/* 
						<label htmlFor="formationid">Formation:</label>
						<input
							type="text"
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							placeholder="Formation"
							onChange={(e) => setFormationId(e.target.value)}
							required
						/> */}
						<label htmlFor="user">Liste des Formations:</label>
						<select
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							name="user"
							onChange={(e) => setFormationId(e.target.value)}
							required
						>
							<option></option>
							{formations
								.sort()
								.map(({ id, data: { formation_name } }) => (
									<option key={id} value={formation_name}>
										{formation_name}
									</option>
								))}
						</select>
						<button
							onClick={() => setEdit(!edit)}
							className="bg-darkBlueCust mt-2 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
						>
							Annuler
						</button>

						<button className="bg-darkBlueCust mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light">
							Modifier
						</button>
					</form>
				</div>
			</CustomSection>
		</div>
	);
};

export default Edituser;
