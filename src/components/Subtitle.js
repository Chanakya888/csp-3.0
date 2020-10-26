import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Subtitle = (props) => {
	// Accepts subtitle as props
	//send display hidden as a prop when you want to hide the underline
	var display = 'block';
	var color = 'secondary';
	var opacity = '100';
	var pb = '10';
	if (props.display === 'hidden') {
		display = 'hidden';
	}
	if (props.color === 'black') {
		color = 'black';
		opacity = '50';
		pb = '4';
	}
	if (props.pb === 'null') {
		pb = '4';
	}
	var subtitle_withoutspaces = props.subtitle.split(' ').join('');
	// Animations start
	useEffect(() => {
		gsap.to(`#${subtitle_withoutspaces}-subtitleUnderline`, {
			scrollTrigger: {
				trigger: `#${subtitle_withoutspaces}-subtitleUnderline`,
				start: '20px 80%'
			},
			width: '2rem',
			duration: 1,
			ease: 'expo.out'
		});
	});

	// Animations end
	return (
		<div className={`pb-${pb}`}>
			<p className={`subtitle-text text-${color} text-opacity-${opacity}`}>{props.subtitle}</p>
			<div className={`w-px bg-secondary h-px mt-2 ${display}`} id={`${subtitle_withoutspaces}-subtitleUnderline`} />
		</div>
	);
};

export default Subtitle;
