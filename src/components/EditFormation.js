import React from 'react';
import CustomSection from './CustomSection';

const Editformation = ({
	edit,
	setEdit,
	setNameFormation,
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
			<div class="bg-gray-100 py-3">
				<div className="w-32 mb-10 py-12 inline">
					<form className="max-w-4xl" onSubmit={handleSubmit}>
					<div class="inline">
					<div className="w-64">
						<label htmlFor="name">Nom de la formation</label>
						<input
							type="text"
							className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
							placeholder="Formation"
							required
							onChange={(e) => setNameFormation(e.target.value)}
						/>
						<label htmlFor="email">URL Video</label>
						<input
							type="url"
							className="appearance-none block w-full bg-red-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
							placeholder="https://"
							required
							onChange={(e) => setUrl(e.target.value)}
						/>
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
						</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Editformation;
