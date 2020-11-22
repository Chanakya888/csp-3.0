import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import PreviousNextButtonComponent from '../PreviousNextButtonComponent';
import { graphql, useStaticQuery } from 'gatsby';
import IndividualCspInThePressComponent from './IndividualCspInThePressComponent';
const CspInThePressComponent = () => {
	const [ x, setX ] = useState(2);
	// date: date of the InvestmentComponent formaat: Date(number) Month(word) year(number)
	// introAboutTheArticle: description of the article
	// sourceLink: read more links takes to the article
	const pressDataQuery = useStaticQuery(graphql`
		query {
			allContentfulIndividualCspInThePress {
				nodes {
					date
					textAboutTheArticle {
						textAboutTheArticle
					}
					sourceLink {
						sourceLink
					}
				}
			}
		}
	`);
	const pressData = pressDataQuery.allContentfulIndividualCspInThePress.nodes;

	let value = 0;
	const handlePrevious = () => {
		if (value > 0) {
			value = value - 1;
			moveSlider(value);
		}
	};
	const handleNext = () => {
		if (value < pressData.length - 1) {
			value = value + 1;
			moveSlider(value);
		}
	};
	//x variable makes sure that handle functions work properly in both ipad and desktop without the need for another function
	useEffect(
		() => {
			if (window.screen.width > 1024) {
				setX(3);
			}
		},
		[ x ]
	);

	let numberOfExtras = pressData.length % x;
	const handleNextInDesktop = () => {
		if (x === 3) {
			if (Math.ceil(value) < Math.ceil(pressData.length / x - 1)) {
				value = value + 1;
				if (numberOfExtras === 1) {
					if (value === Math.ceil(pressData.length / x - 1)) {
						console.log('value matched, last element detected for next');
						value = value - 0.67;
					}
				}
				if (numberOfExtras === 2) {
					if (value === Math.ceil(pressData.length / x - 1)) {
						console.log('value matched, last element detected for next');
						value = value - 0.35;
					}
				}
			}
		} else {
			if (Math.ceil(value) < Math.ceil(pressData.length / x - 1)) {
				value = value + 1;
				if (value === Math.ceil(pressData.length / x - 1)) {
					value = value - 0.5;
				}
			}
		}
		moveSlider(value);
	};

	const handlePreviousInDesktop = () => {
		if (value > 0) {
			if (x === 3) {
				if (x === 3 && numberOfExtras === 1) {
					if (Math.ceil(value) === Math.ceil(pressData.length / x - 1)) {
						console.log('value matched, last element detected for previouss in no. extras 1');
						value = value - 0.33;
						value = value + 1;
					}
				}
				if (x === 3 && numberOfExtras === 2) {
					if (Math.ceil(value) === Math.ceil(pressData.length / x - 1)) {
						console.log('value matched, last element detected for previouss in no. extras 2');
						value = value - 0.65;
						value = value + 1;
					}
				}
				value = value - 1;
				console.log('value of previous after making changess', value);
			} else {
				value = value - 1;
				if (Math.ceil(value) === Math.ceil(pressData.length / x - 2)) {
					console.log('last one detected');
					value = value - 0.5;
					value = value + 1;
				}
			}
			moveSlider(value);
		}
	};

	const moveSlider = (moveby) => {
		const slider = document.getElementById('factSlider');
		console.log('value is ', moveby * 100);
		gsap.to(slider, 0.25, { x: `-${moveby * 100}%` });
	};
	return (
		<div>
			<div className="overflow-hidden">
				<div className="flex justify-start flex-shrink-0" id="factSlider">
					{pressData.map((ipress, index) => {
						return (
							<IndividualCspInThePressComponent
								presentId={'0' + (index + 1)}
								date={ipress.date}
								introAboutTheArticle={ipress.textAboutTheArticle.textAboutTheArticle}
								sourceLink={ipress.sourceLink.sourceLink}
								endId={pressData.length}
								handleNext={handleNext}
								handlePrevious={handlePrevious}
								key={index}
							/>
						);
					})}
				</div>
				<PreviousNextButtonComponent handleNext={handleNextInDesktop} handlePrevious={handlePreviousInDesktop} />
			</div>
		</div>
	);
};

export default CspInThePressComponent;
