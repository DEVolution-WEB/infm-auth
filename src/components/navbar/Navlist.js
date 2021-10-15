import React from 'react';
import './NavBar.css';

const Navlist = () => {
	return (
		<div>
			<ul className="navlist">
				<li>
					<a href="https://www.infm.fr/#section-a836c60-o">
						Notre mission
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-2f18e25-o">
						Nos formations
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-6bb4f66-o">
						Le fondateur
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-8cf797d-o">
						Quelques chiffres
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-c1b9ad3-o">
						Témoignages
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-71bd491-o">
						Plan d'accès
					</a>
				</li>
				<li>
					<a href="https://www.infm.fr/#section-811dc8c-o">Contact</a>
				</li>
			</ul>
			<div className="toggle"></div>
		</div>
	);
};

export default Navlist;
