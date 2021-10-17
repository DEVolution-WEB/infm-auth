import React from 'react';
import CustomSection from './CustomSection';

const Editformation = ({
	edit,
	setEdit,
	setNameFormation,
	setFormationId,
	setUrl,
	handleEditFormations,
	id,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		handleEditFormations(id);
		setEdit(!edit);
	};

	return (
		<div>
			<CustomSection>
				<div className="w-full mb-10 py-15 px-10">
					<form className="max-w-4xl" onSubmit={handleSubmit}>
						<h2 className="text-xl font-medium text-primary mt-0 mb-8">
							Modifier une Formation
						</h2>
						<label htmlFor="name">Nom de la formation</label>
						<input
							type="text"
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							placeholder="Formation"
							required
							onChange={(e) => setNameFormation(e.target.value)}
						/>
						<label htmlFor="formationid">Formation Id</label>
						<input
							type="text"
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							placeholder="Ex: F23"
							required
							onChange={(e) => setFormationId(e.target.value)}
						/>
						<label htmlFor="email">URL Video</label>
						<input
							type="url"
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							placeholder="https://"
							required
							onChange={(e) => setUrl(e.target.value)}
						/>
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

export default Editformation;
