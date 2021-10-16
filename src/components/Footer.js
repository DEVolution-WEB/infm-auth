import React from 'react';
import FooterMap from './FooterMap';
import Footertitle from './FooterTitle';
import Footercontactform from './FooterContactForm';
import Footertoplogo from './FooterTopLogo';
import Footerbottom from './FooterBottom';

const Footer = () => {
	return (
		<>
			<div>
				<footer className="bg-darkBlueCust">
					<Footertitle />
					<Footercontactform />
					<Footertoplogo />
					<FooterMap /> {/* Google Map */}
					<Footerbottom />
				</footer>
			</div>
		</>
	);
};

export default Footer;
