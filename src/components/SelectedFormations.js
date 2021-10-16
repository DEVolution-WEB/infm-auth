import React, { useState } from 'react';
import blueSep from '../assets/darkBlueSep.png';
import { useGlobalContext } from '../context';

const Selectedformations = () => {
	const { formations, setFormations } = useGlobalContext();
	const [query, setQuery] = useState('');
	const [edit, setEdit] = useState(false);
	const [nameFormation, setNameFormation] = useState('');
	const [formationId, setFormationId] = useState('');
	const [url, setUrl] = useState('');

	return (
		<div className="w-full bg-white py-5 px-10">
			<div>
				<div className="text-black text-center pt-6 pb-6">
					<h2 className="text-5xl">Formations Disponible</h2>
					<div className="flex items-center justify-center pt-8 pb-6">
						<img
							className="pointer-events-none"
							src={blueSep}
							alt="separateur jaune"
						></img>
					</div>
				</div>
				<div className="flex justify-center mb-2 space-x-36">
					<div className="w-full max-w-4xl">
						<label htmlFor="user">Liste des Formations:</label>
						<select
							className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							name="user"
							onChange={(e) => setQuery(e.target.value)}
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
					</div>
				</div>

				{formations
					.filter(
						({ data: { formation_name } }) =>
							formation_name === query
					)
					.map(
						({
							id,
							data: {
								created_date,
								formation_id,
								formation_name,
								video_url,
							},
						}) => (
							<div key={id}>
								{/* <Modal
                        id={id}
                        handleDeleteUsers={handleDeleteUsers}
                    /> */}
								<div className="bg-white py-5 px-20">
									<div>
										<div className="flex mb-5 space-x-2">
											<h1 className="text-xl text-black">
												Nom de la formation:
											</h1>
											<p className="text-xl text-black">
												{formation_name}
											</p>
										</div>
										<div className="flex mb-5 space-x-2">
											<h1 className="text-xl text-black">
												Formation Id:
											</h1>
											<p className="text-xl text-black">
												{formation_id}
											</p>
										</div>
										<div className="flex mb-5 space-x-2">
											<h1 className="text-xl text-black">
												URL Video:
											</h1>
											<p className="text-xl text-black">
												{video_url}
											</p>
										</div>
										<div className="flex mb-5 space-x-2">
											<h1 className="text-xl text-black">
												Date de création:
											</h1>
											<p className="text-xl text-black">
												{created_date}
											</p>
										</div>
										<button
											// onClick={() => setEdit(!edit)}
											className="bg-darkBlueCust mt-3 mr-2 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
										>
											Editer
										</button>
										<button
											// onClick={() => setModal(!modal)}
											className="bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:bg-blue-light"
										>
											Suprimer
										</button>
									</div>
								</div>
								<div className="bg-grey-light" key={id}>
									{/* {edit && (
                            <Edituser
                                edit={edit}
                                setEdit={setEdit}
                                handleEditUsers={handleEditUsers}
                                id={id}
                                setUserName={setUserName}
                                setEmail={setEmail}
                                setFormationId={setFormationId}
                            />
                        )} */}
								</div>
							</div>
						)
					)}
			</div>
		</div>
	);
};

export default Selectedformations;
