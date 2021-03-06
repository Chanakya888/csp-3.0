import React, { useEffect } from 'react';
import Subtitle from '../components/Subtitle';
import DefaultButton from '../components/DefaultButton';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { gsap, Power4 } from 'gsap';
import Img from 'gatsby-image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../utils/SplitText';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const WhoWeAreSection = (props) => {
	let showWhoWeAreButtons = 'inline-block';
	if (props.hideButtons === 'hide') {
		showWhoWeAreButtons = 'hidden';
	}
	const data = useStaticQuery(graphql`
		query {
			allContentfulWhoWeAreSectionWhoWeAreDescriptionTextNode {
				nodes {
					whoWeAreDescription
				}
			}
			allContentfulHomePage {
				nodes {
					image3 {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);
	useEffect(() => {
		let t1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#who-we-are-text',
				start: 'top 90%'
			}
		});
		let mySplitText = new SplitText('#who-we-are-text', { type: 'lines', linesClass: 'whoweare-description' });
		let lines = mySplitText.lines;
		t1.fromTo('#who-we-are-text', 1, { opacity: 0, y: 20 }, { opacity: 0.5, y: 0, ease: Power4.easeOut, delay: 0.2 }, 0.15);
		// t1.staggerFrom('.whoweare-description', 1, { opacity: 0, y: 20, ease: Power4.easeOut }, 0.15);
	});

	return (
		<div className="px-6 pt-24 md:px-10 xl:pl-48 xl:pr-0 xl:pt-24 xl:flex xl:justify-evenly">
			<div className="w-full">
				<Subtitle subtitle="who are we" />
				<p className="md:w-8/12 space-x-1 xl:w-4/5" id="who-we-are-text">
					{data.allContentfulWhoWeAreSectionWhoWeAreDescriptionTextNode.nodes[0].whoWeAreDescription}
				</p>
				<div className={`pt-10 w-auto ${showWhoWeAreButtons} md:flex md:justify-start`}>
					<div className="w-auto inline-block ">
						<Link to="/team">
							<DefaultButton buttonText="Meet The Team" />
						</Link>
					</div>
					<div className="pt-6 md:pt-0 md:pl-12 xl:pl-20">
						<Link to="/about">
							<DefaultButton buttonText="Know More about us" />
						</Link>
					</div>
				</div>
			</div>
			<div className="pl-6 xl:w-1/2">
				<div className="relative">
					<Img fluid={data.allContentfulHomePage.nodes[0].image3.fluid} alt="Team of CSP" imgStyle={{ objectFit: 'cover' }} className="homepage-image" />
					<div className="overlay-rectangle" id="overlay-3" />
				</div>
			</div>
		</div>
	);
};

export default WhoWeAreSection;
