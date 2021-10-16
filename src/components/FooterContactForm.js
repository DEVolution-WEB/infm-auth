import React from 'react';

const Footercontactform = () => {
	return (
		<div className="flex justify-center mb-10 space-x-36">
			{/* <h2 className="text-lg opacity-80">
								Formulaire de contact + adresse/horaires
							</h2> */}
			<form className="w-full max-w-xl bg-darkBlueForm text-lightGrayCust p-3 mt-6">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className=" text-white opacity-80 text-lg mb-2"
							htmlFor="grid-first-name"
						>
							Nom
						</label>
						<input
							className="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellowCust"
							id="grid-first-name"
							type="text"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label
							className="text-white opacity-80 text-lg mb-2"
							htmlFor="grid-last-name"
						>
							Téléphone
						</label>
						<input
							className="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 leading-tight focus:outline-none focus:border-yellowCust"
							id="grid-phone-number"
							type="text"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="text-white opacity-80 text-lg mb-2"
							htmlFor="grid-password"
						>
							E-mail
						</label>
						<input
							className="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white y-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellowCust"
							id="email"
							type="email"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className=" text-white opacity-80 text-lg mb-2"
							htmlFor="grid-password"
						>
							Message
						</label>
						<textarea
							className=" no-resize appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 mb-3 leading-tight focus:outline-none h-24 resize-none focus:border-yellowCust"
							id="message"
						></textarea>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						className="shadow bg-yellowCust hover:bg-yellow-400 transition duration-300 text-lg rounded-2xl text-black py-1 px-3 mb-6"
						type="button"
					>
						Envoyer
					</button>
				</div>
			</form>
			<div className="mt-12">
				<div className=" text-lg mb-6">
					<div className="flex justify-left space-x-2">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-5 text-yellowCust"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
									fillRule="evenodd"
								/>
							</svg>
						</div>
						<div className="items-center justify-left">
							<p className=" text-white font-bold">INFM</p>
							<span className="block text-white opacity-80">
								52 rue Charles Michels
							</span>
							<span className="block text-white opacity-80">
								Entrée Nord
							</span>
							<span className="block text-white opacity-80">
								93200 - Saint Denis
							</span>
						</div>
					</div>
				</div>

				<div className=" text-lg mb-6">
					<div className="flex justify-left space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-yellowCust"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.415-1.415L11 9.586V6z"
								fillRule="evenodd"
							/>
						</svg>
						<div className="items-center justify-left">
							<p className=" text-white">du lundi au vendredi</p>
							<span className="block text-white">
								de 8h à 17h30
							</span>
						</div>
					</div>
				</div>

				<div className=" text-lg">
					<div className="flex justify-left space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-yellowCust transform -rotate-90"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
						<div className="items-center justify-left">
							<p className=" text-white">01 41 68 39 78</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footercontactform;
