import React from 'react';

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
			<div className="bg-white py-3">
				<div className="w-32 mb-10 py-12 inline">
					<form className="max-w-4xl" onSubmit={handleSubmit}>
						<div className="inline">
							<div className="w-64">
								<div className="md-input-main font-sans text-lg mt-8 w-64">
									<div className="md-input-box relative">
										<input
											type="text"
											className="md-input w-full text-black bg-gray-100"
											placeholder=" "
											onChange={(e) =>
												setNameFormation(e.target.value)
											}
											required
										/>
										<label
											className="text md-label absolute pointer-events-none block ml-2 text-lightGrayCust"
											htmlFor="name"
										>
											Nom de la formation
										</label>
										<div className="md-input-underline absolute left-0 right-0 pointer-events-none" />
									</div>
								</div>
								<div className="md-input-main font-sans text-lg mt-5 mb-5">
									<div className="md-input-box relative">
										<input
											type="url"
											className="md-input w-full text-black bg-gray-100"
											placeholder=" "
											onChange={(e) =>
												setUrl(e.target.value)
											}
											required
										/>
										<label
											className="text md-label absolute pointer-events-none block ml-2 text-lightGrayCust"
											htmlFor="url"
										>
											URL de la vidéo
										</label>
										<div className="md-input-underline absolute left-0 right-0 pointer-events-none" />
									</div>
								</div>
								<div className="flex justify-center px-8 md:justify-center">
									<button
										onClick={() => setEdit(!edit)}
										className="bg-darkBlueCust mt-2 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300"
									>
										Annuler
									</button>
									<button className="bg-darkBlueCust mt-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-800 transition hover:duration-300">
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
