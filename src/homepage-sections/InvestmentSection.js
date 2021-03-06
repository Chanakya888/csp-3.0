import React from 'react';
import InvestmentComponent from '../components/investmentComponentFolder/InvestmentComponent';
import Subtitle from '../components/Subtitle';

const InvestmentSection = () => {
	return (
		<div className="pt-32 xl:pt-24 width-wrapper width-wrapper-fullscreen">
			<div className="xl:pl-42">
				<Subtitle subtitle="Our Illustrative investments" />
			</div>
			<InvestmentComponent />
		</div>
	);
};

export default InvestmentSection;
