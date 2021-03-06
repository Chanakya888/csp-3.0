import React, { useEffect } from 'react';
import Subtitle from '../components/Subtitle';
import DefaultButton from '../components/DefaultButton';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimelineLite } from 'gsap/gsap-core';
import { SplitText } from '../utils/SplitText';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulHomePage {
				nodes {
					homePageImage1 {
						fluid {
							...GatsbyContentfulFluid
						}
					}
					homePageImage2 {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
			allContentfulHomePageAboutDescriptionTextNode {
				nodes {
					aboutDescription
				}
			}
			allContentfulHomePageMainSecondaryDescriptionTextNode {
				nodes {
					mainSecondaryDescription
				}
			}
		}
	`);
	// Animations start
	const duration = 1.5;

	useEffect(() => {
		let t1 = new TimelineLite();
		let mySplitText = new SplitText('#split-text', { type: 'lines', linesClass: 'about-p' });

		t1.fromTo('.about-p', 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 2 }, 0.15);
		t1.to(
			'#overlay-1',
			{
				height: '0px',
				duration: duration,
				ease: Power4.easeOut,
				delay: 0.1
			},
			'-=0.5'
		);
		gsap.to('#overlay-2', {
			scrollTrigger: {
				trigger: '#overlay-2',
				start: 'top 80%'
			},
			height: '0px',
			duration: duration,
			ease: Power4.easeOut
		});
		gsap.to('#overlay-3', {
			scrollTrigger: {
				trigger: '#overlay-3',
				start: 'top 80%'
			},
			height: '0px',
			duration: duration,
			ease: Power4.easeOut
		});
		let t2 = gsap.timeline({
			scrollTrigger: {
				trigger: '#split-text-subheading',
				start: 'top 90%'
			}
		});
		let split = new SplitText('#split-text-subheading', {
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
		t2.staggerFrom(document.querySelectorAll('.line_innerDiv'), 1.5, { y: '100%', ease: Power4.easeOut }, 0.15);
	});
	return (
		<div className="pt-16 md:pt-24 xl:pt-24">
			<div className="flex justify-between">
				<div>
					<div className="px-6 md:px-10 xl:pl-48 xl:pr-20">
						<Subtitle subtitle="about" animationName="about" />
						<div>
							<p className="md:w-8/12 lg:w-1/2 xl:w-full" id="split-text">
								{data.allContentfulHomePageAboutDescriptionTextNode.nodes[0].aboutDescription}
							</p>
						</div>
						{/* buttons */}
						<div className="pt-10 w-auto inline-block md:flex md:justify-start">
							<div className="w-auto inline-block ">
								<a href="#GetInTouch">
									<button>
										<DefaultButton buttonText="get in touch" />
									</button>
								</a>
							</div>
							<div className="pt-6 md:pt-0 md:pl-16 xl:pl-16">
								<button>
									<Link to="/investments">
										<DefaultButton buttonText="Browse Our Recent Investments" />
									</Link>
								</button>
							</div>
						</div>
					</div>
					<div className="pr-6 pt-6 mt-32 xl:pt-0 xl:w-1/2">
						<div className="relative" id="image-2">
							<div id="image-2">
								<Img fluid={data.allContentfulHomePage.nodes[0].homePageImage2.fluid} alt="Beautiful Skyscraper again" imgStyle={{ objectFit: 'cover' }} className="homepage-image" />
							</div>
							<div className="overlay-rectangle" id="overlay-2" />
						</div>
					</div>
				</div>
				<div className="">
					<div className="pt-20 hidden xl:block">
						{/* This image is for xl size */}
						<div className="relative">
							<Img fluid={data.allContentfulHomePage.nodes[0].homePageImage1.fluid} alt="Two Beautiful Skyscrapers" imgStyle={{ objectFit: 'cover' }} className="homepage-image" id="image-1" />
							<div className="overlay-rectangle" id="overlay-1" />
						</div>
						{/* Text for sub heading beside image 2 */}
						<div className="pt-64 xl:pt-20 xl:w-full flex items-end">
							<div className="text-4xl" id="split-text-subheading">
								{data.allContentfulHomePageMainSecondaryDescriptionTextNode.nodes[0].mainSecondaryDescription}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-end ">
				<div className="pl-6 pt-20 xl:w-1/2  xl:hidden">
					{/* This image is till lg size */}
					<Img fluid={data.allContentfulHomePage.nodes[0].homePageImage1.fluid} alt="Two Beautiful Skyscrapers" imgStyle={{ objectFit: 'cover' }} className="homepage-image" />
				</div>
			</div>
			>
		</div>
	);
};

export default AboutSection;
