import React from 'react';
import Subtitle from '../components/Subtitle';
import CspInThePressComponent from '../components/CspInThePressFolder/CspInThePressComponent';

const CspInThePressSection = () => {
	return (
		<div className="pt-32 px-6 md:px-10  xl:pt-24">
			<div className="xl:pl-40">
				<Subtitle subtitle="CSP in the press" />
			</div>
			<CspInThePressComponent />
		</div>
	);
};

export default CspInThePressSection;
