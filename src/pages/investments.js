import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import IndividualInvestmentComponent from '../components/investmentComponentFolder/IndividualInvestmentComponent';
import { gsap, TimelineLite, Power4 } from 'gsap';
import { SplitText } from '../utils/SplitText';
gsap.registerPlugin(SplitText);
const Investments = () => {
	const dataQuery = useStaticQuery(graphql`
		query {
			allContentfulIndividualInvestment(sort: { fields: displayQueue, order: ASC }) {
				nodes {
					investmentName
					investmentLogo {
						fluid {
							...GatsbyContentfulFluid
						}
					}
					investmentParagraph {
						investmentParagraph
					}
					id
					mergeExitTitle
					investmentWebsiteLink
					slug
				}
			}
		}
	`);
	const investmentData = dataQuery.allContentfulIndividualInvestment.nodes;
	useEffect(() => {
		let t1 = new TimelineLite();
		let split = new SplitText('#investment-text-heading', {
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

		t1.staggerFrom(document.querySelectorAll('.line_innerDiv'), 1, {
			y: '100%',
			ease: Power4.easeOut,
			delay: 0.15
		});

		t1.fromTo('#investment-page-landing-split-text', 1, { opacity: 0, y: 20 }, { opacity: 0.5, y: 0, ease: Power4.easeOut, delay: 0.4 });
	});

	return (
		<div className="bg-primary">
			<Layout>
				<div className="top-padding-for-each-page width-wrapper">
					<div className="text-6xl  leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl" id="investment-text-heading">
						Investments of CSP
					</div>
					<p className="pt-8 paragraph-width-container md:w-8/12" id="investment-page-landing-split-text">
						We are a private equity investment firm investing across telecommunications, media & technology, healthcare, consumer and business services sectors with footprints across south east Asia and India.
					</p>
				</div>
				<div className="top-padding-for-each-page px-6">
					<div className="team-grid-container">
						{investmentData.map((idata, index) => {
							return (
								<IndividualInvestmentComponent
									customer={idata.mergeExitTitle}
									company={idata.investmentName}
									companyDes={idata.investmentParagraph.investmentParagraph}
									key={index}
									slug={idata.slug}
									logoImage={idata.investmentLogo.fluid}
									makeWidthFull={'make-width-full'}
									disableCount={'disable-count'}
									AnimateComponents="true"
									type="investment"
								/>
							);
						})}
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Investments;
