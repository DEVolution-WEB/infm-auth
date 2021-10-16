import React, { useRef } from 'react';
import logoINFM from '../../assets/logo-infm.png';
import './NavBar.css';

const Navbar = () => {
	const contactRef = useRef(null);

	const goToSection = (id) => {
		contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};
	return (
		<div className="header">
			<div className="navbar-container px-7">
				<header>
					<nav className="flex items-center justify-between p-6 h-24 bg-white shadow-sm bg-opacity-70 fixed inset-x-0 z-40 backdrop-filter backdrop-blur">
						{' '}
						{/* inset-x-0 équivaut a top-0 left-0 */}
						<div className="py-3 px-1">
							<a href="https://www.infm.fr/#">
								<img
									className="py-10"
									src={logoINFM}
									alt="logo infm"
								></img>
							</a>
						</div>
						<ul>
							<li className="space-x-3 text-lg text-darkBlueCust">
								<a
									href="https://www.infm.fr/#section-a836c60-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Notre mission
								</a>
								<a
									href="https://www.infm.fr/#section-2f18e25-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Nos formations
								</a>
								<a
									href="https://www.infm.fr/#section-6bb4f66-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Le fondateur
								</a>
								<a
									href="https://www.infm.fr/#section-8cf797d-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Quelques chiffres
								</a>
								<a
									href="https://www.infm.fr/#section-c1b9ad3-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Témoignages
								</a>
								<a
									href="https://www.infm.fr/#section-71bd491-o"
									className="py-2 px-3 hover:bg-darkBlueCust hover:text-white rounded-3xl transition duration-300"
								>
									Plan d'accès
								</a>
								<button
									onClick={goToSection}
									className="py-2 px-3 hover:bg-blue-900 hover:text-white rounded-3xl transition duration-300"
								>
									Contact
								</button>
								{/* <a
									href="https://www.infm.fr/#"
									className="py-3 px-3 bg-darkBlueCust hover:bg-blue-700 text-white hover:text-yellowCust rounded-3xl transition duration-300"
								>
									Se déconnecter
								</a> */}
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</div>
	);
};

export default Navbar;
