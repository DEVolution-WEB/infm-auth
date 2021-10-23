import React from 'react';
import { useGlobalContext } from '../../context';

const Edituser = ({
	edit,
	setEdit,
	id,
	handleEditUsers,
	setFormationId,
	setUserName,
	error,
}) => {
	const { formations } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		handleEditUsers(id);
		setEdit(!edit);
	};
	return (
		<div>
			<div class="bg-white px-10 md:px-0">
				<div className="w-32 mb-10 py-12 inline">
					<form className="max-w-4xl pb-3" onSubmit={handleSubmit}>
						<div className="md-input-main font-sans text-lg mt-12">
							<div className="md-input-box relative">
								<input
									type="text"
									className="md-input w-full text-black bg-gray-100"
									placeholder=" "
									onChange={(e) =>
										setUserName(e.target.value)
									}
									required
								/>
								<label
									className={`md-label absolute pointer-events-none block ml-2 ${
										error
											? 'text-red-600'
											: 'text-lightGrayCust'
									}`}
									htmlFor="name"
								>
									Nom
								</label>
								<div
									className={`md-input-underline absolute left-0 right-0 pointer-events-none ${
										error && 'error'
									}`}
								/>
							</div>
						</div>

						<label htmlFor="user">Liste des Formations:</label>
						<select
							className="w-64 block bg-gray-100 text-black opacity-80 border-b border-white py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:border-yellowCust"
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

						<div className="flex px-8 md:justify-center md:px-0">
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edituser;
