import React, { useRef } from 'react';
import logoINFM from '../../assets/logo-infm.png';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Navbar = () => {
	const contactRef = useRef(null);
	const navRef = React.useRef(null);
	

	const goToSection = (id) => {
		contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	const showSidebar = (e) => {
		navRef.current.classList.remove("translate-x-full");
	};

	return (
		<div className="header">
			<header class=''>
				<div class="sidebar min-h-screen xl:hidden flex fixed right-0 transform translate-x-full transition duration-200 ease-in-out z-50" ref={navRef}>
						<div class="bg-white text-darkBlueCust w-72">

							<div class="bg-darkBlueCust text-white text-xl flex items-center px-4 h-20">
											<h1> INFM</h1>
									</div>
									<nav>
										<a href="https://www.infm.fr/#section-a836c60-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Notre mission</a>
										<a href="https://www.infm.fr/#section-2f18e25-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Nos formations</a>
										<a href="https://www.infm.fr/#section-6bb4f66-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Le fondateur</a>
										<a href="https://www.infm.fr/#section-8cf797d-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Quelques chiffres</a>
										<a href="https://www.infm.fr/#section-c1b9ad3-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Témoignages</a>
										<a href="https://www.infm.fr/#section-71bd491-o" class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Plan d'accès</a>
										<a onClick={goToSection} class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover cursor-pointer transition duration-200">Contact</a>
										<a class="block py-2 px-4 shadow-sm hover:bg-graySidebarHover transition duration-200">Se déconnecter</a>
									</nav>
						</div>
					</div>
				<nav class='flex items-center justify-between p-6 h-24 md:h-20 bg-white shadow-sm bg-opacity-70 fixed inset-x-0 z-40 backdrop-filter backdrop-blur'>
					{' '}
					{/* inset-x-0 équivaut a top-0 left-0 */}
					<div class='py-3 px-1'>
						<a href='https://www.infm.fr/#'>
							<img class='h-3/4 w-3/4 sm:h-auto sm:w-full' src={logoINFM} alt='logo infm'></img>
						</a>
					</div>
					<div class="hidden navxl:flex">
						<ul>
							<li class='space-x-1 text-sm text-darkBlueCust'>
								<a href='https://www.infm.fr/#section-a836c60-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Notre mission
								</a>
								<a href='https://www.infm.fr/#section-2f18e25-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Nos formations
								</a>
								<a href='https://www.infm.fr/#section-6bb4f66-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Le fondateur
								</a>
								<a href='https://www.infm.fr/#section-8cf797d-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Quelques chiffres
								</a>
								<a href='https://www.infm.fr/#section-c1b9ad3-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Témoignages
								</a>
								<a href='https://www.infm.fr/#section-71bd491-o' class='py-2 px-2 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300'>
									Plan d'accès
								</a>
								<button onClick={goToSection} class='py-2 px-2 hover:bg-blue-900 hover:text-white rounded-3xl transition duration-300'>
									Contact
								</button>
								<button class='py-2 px-1 bg-darkBlueCust hover:bg-blue-700 text-white hover:text-yellowCust rounded-3xl transition duration-300'>
									Se déconnecter
								</button>
							</li>
						</ul>
					</div>
					
					{/* Burger Button */}
					<button onClick={showSidebar} class="burger-button xl:hidden flex text-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-darkBlueCust" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd"/>
						</svg>
					</button>

					
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
