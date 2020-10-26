import React from 'react';
import Subtitle from '../../Subtitle';
import FooterForm from './FooterForm';
import ContactDetails from './ContactDetails';

const Footer = () => {
	return (
		<div className="pt-12 px-6 md:px-10 xl:px-40 xl:pt-24" id="GetInTouch">
			<Subtitle subtitle="get in touch" pb="null" />
			<p className="pt-12 md:w-8/12">Do you have a specific query? Fill in the form below and we’ll reach out to you</p>
			<FooterForm />
			<ContactDetails />
		</div>
	);
};

export default Footer;
