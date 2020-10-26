import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../css/tailwind.css';
import '../css/global.css';
import Layout from '../components/layout/Layout';
import AboutSection from '../homepage-sections/Aboutsection';
import WhoWeAreSection from '../homepage-sections/WhoWeAreSection';
import InvestmentSection from '../homepage-sections/InvestmentSection';
import FactsAndFiguresSection from '../homepage-sections/FactsAndFiguresSection';
import TeamAtCspSection from '../homepage-sections/TeamAtCspSection';
import GeneralQuestionSection from '../homepage-sections/GeneralQuestionSection';
import { TimelineLite, gsap } from 'gsap';
import { SplitText } from '../utils/SplitText';
import { element } from 'prop-types';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			contentfulHomePageMainDescriptionTextNode {
				mainDescription
			}
		}
	`);

	useEffect(() => {
		let t1 = new TimelineLite();
		let split = new SplitText('#split-text-Heading', {
			type: 'lines',
			linesClass: 'split-line-heading'
		});
		split.lines.forEach((element) => {
			const line_innerDiv = document.createElement('h1');
			line_innerDiv.classList.add('split-line-heading');
			line_innerDiv.textContent = element.textContent;
			element.textContent = '';
			element.appendChild(line_innerDiv);
		});
		gsap.set('.split-line-heading', { y: 100 });
		gsap.to('.split-line-heading', {
			duration: 0.75,
			y: 0,
			stagger: 0.1,
			ease: 'easeOut',
			delay: 1
		});
	});
	return (
		<div className="bg-primary">
			<Layout>
				<div className="" id="mainComponent">
					<div id="wrapper">
						<div className="top-padding-for-each-page ">
							<h1 className="text-6xl width-wrapper leading-h1LineHeight  capitalize xl:text-7xl xl:leading-7xl hide-text-div" id="split-text-Heading">
								{data.contentfulHomePageMainDescriptionTextNode.mainDescription}
							</h1>
							<AboutSection />
							<WhoWeAreSection />
						</div>
						<div>
							<InvestmentSection />
							<FactsAndFiguresSection />
							<TeamAtCspSection />
							<GeneralQuestionSection />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default IndexPage;
