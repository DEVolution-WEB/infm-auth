import React, { useRef } from 'react';
import FooterMap from './FooterMap';
import Footertitle from './FooterTitle';
import Footercontactform from './FooterContactForm';
import Footertoplogo from './FooterTopLogo';
import Footerbottom from './FooterBottom';

const Footer = () => {
	const contactRef = useRef(null);
	return (
		<>
			<div>
				<footer className="bg-darkBlueCust">
					<div ref={contactRef}>
						<Footertitle />
						<Footercontactform />
						<Footertoplogo />
					</div>
					<FooterMap /> {/* Google Map */}
					<Footerbottom />
				</footer>
			</div>
		</>
	);
};

export default Footer;
