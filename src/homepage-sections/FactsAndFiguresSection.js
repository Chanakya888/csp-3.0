import React from 'react';
import Subtitle from '../components/Subtitle';
import FactsAndFiguresComponent from '../components/factsAndFiguresFolder/FactsAndFiguresComponent';

const FactsAndFiguresSection = () => {
	return (
		<div className="pt-32 px-6 md:px-10  xl:pt-24">
			<div className="xl:pl-40">
				<Subtitle subtitle="CSP in the press" />
			</div>
			<FactsAndFiguresComponent />
		</div>
	);
};

export default FactsAndFiguresSection;
