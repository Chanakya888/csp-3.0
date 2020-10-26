import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import IndividualInvestmentComponent from '../components/investmentComponentFolder/IndividualInvestmentComponent';
import Layout from '../components/layout/Layout';
import { gsap, TimelineLite, Power4 } from 'gsap';
import { SplitText } from '../utils/SplitText';
gsap.registerPlugin(SplitText);
const Team = () => {
	const teamDataQuery = useStaticQuery(graphql`
		query {
			allContentfulIndividualTeamMember(sort: { fields: displayQueue, order: ASC }) {
				nodes {
					positionInTheCompany
					nameOfTheEmployee
					pictureOfTheEmployee {
						fluid {
							...GatsbyContentfulFluid
						}
					}
					id
					slug
				}
			}
		}
	`);
	const teamData = teamDataQuery.allContentfulIndividualTeamMember.nodes;
	useEffect(() => {
		let t1 = new TimelineLite();
		let split = new SplitText('#team-page-text-heading', {
			type: 'lines',
			linesClass: 'line'
		});
		split.lines.forEach((element) => {
			const line_innerDiv = document.createElement('h1');
			line_innerDiv.classList.add('line_innerDiv');
			line_innerDiv.textContent = element.textContent;
			element.textContent = '';
			element.appendChild(line_innerDiv);
		});
		let aboutSplitText = new SplitText('#team-page-landing-split-text', {
			type: 'lines'
		});
		let aboutLines = aboutSplitText.lines;
		t1.from(document.querySelectorAll('.line_innerDiv'), 1, {
			opacity: 0,
			ease: Power4.easeOut
		});
		t1.staggerFrom(document.querySelectorAll('.line_innerDiv'), 1, { y: '100%', ease: Power4.easeOut, delay: 0.25 }, 0.15);
		t1.staggerFrom(aboutLines, 1, { opacity: 0, y: 20, ease: Power4.easeOut, delay: 1 }, 0.15, '-=1.5');
	});

	return (
		<div className="bg-primary">
			<Layout>
				<div className="top-padding-for-each-page width-wrapper">
					<div className="text-6xl  leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl" id="team-page-text-heading">
						Team at CSP
					</div>
					<p className="pt-8 paragraph-width-container md:w-8/12" id="team-page-landing-split-text">
						An introduction of your team of around 5 to 6 lines will go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, suscipit!lorem10
					</p>
				</div>
				<div className="top-padding-for-each-page px-6 ">
					<div className="team-grid-container">
						{teamData.map((iteam1, index) => {
							return (
								<IndividualInvestmentComponent
									customer={iteam1.positionInTheCompany}
									company={iteam1.nameOfTheEmployee}
									key={index}
									fact="hide"
									logoImage={iteam1.pictureOfTheEmployee.fluid}
									makeWidthFull={'make-width-full'}
									disableCount={'disable-count'}
									slug={iteam1.slug}
									AnimateComponents="true"
									type="team"
								/>
							);
						})}
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Team;
