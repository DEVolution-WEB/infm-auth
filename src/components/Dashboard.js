import React, { useState } from 'react';
import { useRef } from 'react'
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import FooterMap from './FooterMap';
import logoINFM from '../assets/logo-infm.png';
import logo2 from '../assets/logo48couleurs.png';
import logo3 from '../assets/logoQualiopi.png';
import logo4 from '../assets/logoMCFormation.png';
import logo5 from '../assets/logoPoleEmploi.png';
import logo6 from '../assets/logoMlocale.png';
import yellowSep from '../assets/yellowSep.png'
import blueSep from '../assets/darkBlueSep.png'
import '../assets/css/fonts/font.css'
import '../assets/css/section.css'
import CustomSection from './CustomSection';

const Dashboard = () => {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	const contactRef = useRef(null);

	const goToSection=(id)=>{
		contactRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
	  };

	async function handleLogout() {
		setError('');
		try {
			await logout();
			history.push('/login');
		} catch (error) {
			setError('Échec de la déconnexion');
		}
	}

	return (
		<div>
				<header class="">
						<nav class="flex items-center justify-between p-6 h-24 bg-white shadow-sm bg-opacity-70 fixed inset-x-0 z-40 backdrop-filter backdrop-blur"> {/* inset-x-0 équivaut a top-0 left-0 */}
							<div class="py-3 px-1"> 
								<a href="https://www.infm.fr/#">
									<img class="py-10" src={logoINFM} alt="logo infm"></img> 
								</a>
							</div>
							<ul>
								<li class="space-x-3 text-lg text-darkBlueCust">
									<a href="https://www.infm.fr/#section-a836c60-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Notre mission</a>
									<a href="https://www.infm.fr/#section-2f18e25-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Nos formations</a>
									<a href="https://www.infm.fr/#section-6bb4f66-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Le fondateur</a>
									<a href="https://www.infm.fr/#section-8cf797d-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Quelques chiffres</a>
									<a href="https://www.infm.fr/#section-c1b9ad3-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Témoignages</a>
									<a href="https://www.infm.fr/#section-71bd491-o" class="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300">Plan d'accès</a>
									<button onClick={goToSection} class="py-2 px-3 hover:bg-blue-900 hover:text-white rounded-3xl transition duration-300">Contact</button>
									<a href="https://www.infm.fr/#" class="py-3 px-3 bg-darkBlueCust hover:bg-blue-700 text-white hover:text-yellowCust rounded-3xl transition duration-300">Se déconnecter</a>
								</li>
								
							</ul>
						</nav>
					
				</header>


		
				<body>
						<div class="bg-white py-12 px-10"> 
							<div>
								<div class="text-darkBlueCust text-center pt-20 pb-6">
									<h1 class="text-5xl">Ceci est un exemple de titre</h1>
										<div class="flex items-center justify-center pt-8 pb-6">
											<img class="pointer-events-none" src={yellowSep} alt="separateur jaune"></img> 
										</div>
								</div>
								
								<div class="flex justify-center mb-10 space-x-36">
									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>

									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>

									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>
								</div>
							</div>
						</div>

						<CustomSection>
							<div>
								<div class="text-black text-center pt-12 pb-6">
									<h1 class="text-5xl">Ceci est un autre exemple de titre</h1>
									<div class="flex items-center justify-center pt-8 pb-6">
										<img class="pointer-events-none" src={yellowSep} alt="separateur jaune"></img> 
									</div>
								</div>
								

								<div class="flex justify-center mb-10 space-x-36">
									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>

									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>

									<div>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
									</div>
								</div>
							</div>
						</CustomSection>
						
						<div class="bg-white py-12 px-10"> 
							<div>
								<div class="text-black text-center pt-6 pb-6">
									<h1 class="text-5xl">Ceci est un autre exemple de titre</h1>
									<div class="flex items-center justify-center pt-8 pb-6">
										<img class="pointer-events-none" src={blueSep} alt="separateur jaune"></img> 
									</div>
								</div>
								

								<div class="flex justify-center mb-10 space-x-36">
										<div>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										</div>

										<div>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										</div>

										<div>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
											<h1 class="text-4xl text-black">Ceci est un test super long la la la la la la la la la</h1>
										</div>
								</div>
							</div>
						</div>
				</body>
			
			
			<footer class="bg-darkBlueCust" >
				<div ref={contactRef}>
					<div class="text-white text-center pt-12 pb-6">
						<h1 class="text-4xl">Contactez-nous dès maintenant pour une pré-inscription</h1>
						<div class="flex items-center justify-center pt-8 pb-6">
								<img class="pointer-events-none" src={yellowSep} alt="separateur jaune"></img> 
						</div>
						<h2 class="text-lg opacity-80">Les formations peuvent être prises en charge par Pôle Emploi, le CPF et les OPCO</h2>
					</div>
					<div class="flex justify-center mb-10 space-x-36"> {/* Formulaire de contact + adresse/horaires */}
						<form class="w-full max-w-xl bg-darkBlueForm text-lightGrayCust p-3 mt-6">
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label class=" text-white opacity-80 text-lg mb-2" for="grid-first-name">
										Nom
									</label>
										<input class="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellowCust" id="grid-first-name" type="text"/>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="text-white opacity-80 text-lg mb-2" for="grid-last-name">
									Téléphone
									</label>
										<input class="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 leading-tight focus:outline-none focus:border-yellowCust" id="grid-phone-number" type="text"/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full px-3">
								<label class="text-white opacity-80 text-lg mb-2" for="grid-password">
									E-mail
								</label>
								<input class="appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white y-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellowCust" id="email" type="email"/>
								
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full px-3">
								<label class=" text-white opacity-80 text-lg mb-2" for="grid-password">
									Message
								</label>
								<textarea class=" no-resize appearance-none block w-full bg-transparent text-white opacity-80 border-b border-white py-3 px-4 mb-3 leading-tight focus:outline-none h-24 resize-none focus:border-yellowCust" id="message"></textarea>
								
								</div>
							</div>
							<div class="flex justify-center">
								<button class="shadow bg-yellowCust hover:bg-yellow-400 transition duration-300 text-lg rounded-2xl text-black py-1 px-3 mb-6" type="button">
									Envoyer
								</button>
							</div>
					</form>

						<div class="mt-12">
							<div class=" text-lg mb-6">
								<div class="flex justify-left space-x-2">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-5 text-yellowCust" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clip-rule="evenodd"/>
										</svg>
									</div>
									<div class="items-center justify-left">
										<p class=" text-white font-bold">INFM</p>
										<span class="block text-white opacity-80">52 rue Charles Michels</span>
										<span class="block text-white opacity-80">Entrée Nord</span>
										<span class="block text-white opacity-80">93200 - Saint Denis</span>
									</div>
								</div>
								
							</div>

							<div class=" text-lg mb-6">
								<div class="flex justify-left space-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellowCust" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
									</svg>
									<div class="items-center justify-left">
										<p class=" text-white">du lundi au vendredi</p>
										<span class="block text-white">de 8h à 17h30</span>
									</div>
								</div>
							</div>

							<div class=" text-lg">
								<div class="flex justify-left space-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellowCust transform -rotate-90" viewBox="0 0 20 20" fill="currentColor">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									<div class="items-center justify-left">
										<p class=" text-white">01 41 68 39 78</p>
									</div>
								</div>
							</div>
						</div>
				</div>







				<div class="container px-6 py-4 mx-auto"> {/* Partie au dessus de la map */}
							<div class="flex items-center justify-center mb-10 space-x-12">
										<img class="h-10 opacity-80 hover:opacity-100 transition duration-150" src={logo3} alt="logo Qualiopi"></img> 
										<img class="h-16 opacity-80 hover:opacity-100 transition duration-150" src={logo4} alt="logo Mon Compte Formation"></img> 
										<img class="h-24 opacity-80 hover:opacity-100 transition duration-150" src={logo5} alt="logo Pole Emploi"></img> 
										<img class="h-20 opacity-80 hover:opacity-100 transition duration-150" src={logo6} alt="logo Mission Locale"></img> 
							</div>
						</div>
					</div>
		
					<FooterMap /> {/* Google Map */}

					<div class="container px-6 py-4 mx-auto"> {/* Partie en dessous de la map */}
						<div class="flex items-center justify-center mb-10 space-x-3"> {/* Partie au dessus de la map */}
							<p class=" text-white font-bold font-family-default text-lg">Nous soutenons une économie responsable</p>
								<a href="https://www.48couleurs.org/adhesion-mecenat">
										<img class="h-12" src={logo2} alt="logo 48 couleurs"></img> 
								</a>
						</div>
						<div>
							<p class="text-center text-lightGrayCust">Réalisé par DEVOLUTION — Copyright 2021 — Mentions légales</p>
						</div>
					</div>
					
			</footer>

			</div>
	);
};

export default Dashboard;
