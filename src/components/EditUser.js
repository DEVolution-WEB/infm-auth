import React from 'react';

const Edituser = ({
	edit,
	setEdit,
	id,
	handleEditUsers,
	setFormationId,
	setEmail,
	setUserName,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		handleEditUsers(id);
		setEdit(!edit);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2 className="text-xl font-medium text-primary mt-0 mb-8">
					Modifier utilisateur
				</h2>
				<label htmlFor="name">Nom d'utilisateur</label>
				<input
					type="text"
					className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
					placeholder="Utilisateur"
					onChange={(e) => setUserName(e.target.value)}
					required
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label htmlFor="formationid">Formation Id</label>
				<input
					type="number"
					className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
					placeholder="Identifiant formation"
					onChange={(e) => setFormationId(e.target.value)}
					required
				/>
				<button
					onClick={() => setEdit(!edit)}
					className="bg-blue mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
				>
					Annuler
				</button>

				<button className="bg-blue mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light">
					Modifier
				</button>
			</form>
		</div>
	);
};

export default Edituser;
