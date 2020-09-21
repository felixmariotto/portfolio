
import './homepage.css';

import * as THREE from 'three';

import Link from '../link/Link.js';

import texts from '../../data/texts.js';

import Intro from './scenes/Intro.js';
import Expertise from './scenes/Expertise.js';
import Prototypes from './scenes/Prototypes.js';
import Casting from './scenes/Casting.js';
import Doc from './scenes/Doc.js';
import Contact from './scenes/Contact.js';

//

const clock = new THREE.Clock();

//

const container = document.createElement('DIV');
container.id = "homepage-container";

//

const dummy = document.createElement('DIV');
dummy.id = 'dummy-container';
document.body.append( dummy );

//

const scenesContainers = [];

for ( let i = 0 ; i < 6 ; i++ ) {

	const sceneContainer = document.createElement('DIV');
	sceneContainer.classList.add( 'scene-container' );
	
	//

	const fixedContainer = document.createElement('DIV');
	fixedContainer.classList.add( 'scene-fixed-container' );

	//

	scenesContainers.push( fixedContainer );
	sceneContainer.append( fixedContainer );
	container.append( sceneContainer );

};

// add down carret icons to all scene but the last

scenesContainers.forEach( ( sceneContainer, i, arr ) => {

	if ( i === arr.length - 1 ) return

	const arrowContainer = document.createElement('DIV');
	arrowContainer.classList.add('homepage-arrow-container');
	
	if ( i === 0 ) {

		arrowContainer.classList.add('first');

		arrowContainer.append('scroll')

	}

	const arrow = document.createElement('I');
	arrow.classList.add('fa', 'fa-caret-down');

	arrowContainer.append( arrow );
	sceneContainer.append( arrowContainer );

	arrowContainer.addEventListener( 'click', () => {

		window.scrollTo({
			top: getSceneContainerHeight() * (i + 1),
			behavior: 'smooth'
		});

	})

});

// Create scenes and add them to dom elements

const intro = Intro( scenesContainers[ 0 ] );
const expertise = Expertise( scenesContainers[ 1 ] );
const prototypes = Prototypes( scenesContainers[ 2 ] );
const casting = Casting( scenesContainers[ 3 ] );
const doc = Doc( scenesContainers[ 4 ] );
const contact = Contact( scenesContainers[ 5 ] );

const scenes = [
	intro,
	expertise,
	prototypes,
	casting,
	doc,
	contact
];

// Textual UI

function makeLink( linkTo, textNode ) {

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-caret-right');

	const link = Link( linkTo );
	link.append( textNode, icon );

	return link

};

(function introUI() {

	const container = document.createElement('H1');
	container.id = 'intro-textual-ui';
	container.classList.add('textual-ui')
	container.append( texts.homepage.intro.intro );

	scenesContainers[ 0 ].append( container );

})();

(function expertiseUI() {

	const container = document.createElement('DIV');
	container.id = 'expertise-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 1 ].append( container );

	// title

	const title = document.createElement('H2');
	title.append( texts.homepage.expertise.title );

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.append( texts.homepage.expertise.text );

	container.append( speech );

	// link

	container.append( makeLink( 'expertise', texts.homepage.expertise.more ) );

})();

(function prototypesUI() {

	const container = document.createElement('DIV');
	container.id = 'prototypes-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 2 ].append( container );

	// title

	const title = document.createElement('H2');
	title.append( texts.homepage.prototypes.title );

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.append( texts.homepage.prototypes.text );

	container.append( speech );

	// link

	container.append( makeLink( 'prototypes', texts.homepage.prototypes.more ) );

})();

(function castingUI() {

	const container = document.createElement('DIV');
	container.id = 'casting-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 3 ].append( container );

	// title

	const title = document.createElement('H2');
	title.append( texts.homepage.casting.title );

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.append( texts.homepage.casting.text );

	container.append( speech );

	// link

	container.append( makeLink( 'casting parts', texts.homepage.casting.more ) );

})();

(function docUI() {

	const container = document.createElement('DIV');
	container.id = 'doc-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 4 ].append( container );

	// title

	const title = document.createElement('H2');
	title.append( texts.homepage.doc.title );

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.append( texts.homepage.doc.text );

	container.append( speech );

	// link

	container.append( makeLink( 'technical doc', texts.homepage.doc.more ) );

})();

(function contactUI() {

	const container = document.createElement('DIV');
	container.id = 'contact-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 5 ].append( container );

	// title

	const title = document.createElement('H2');
	title.append( texts.homepage.contact.title );

	container.append( title );

	// links

	container.append( makeLink( 'webdev', texts.homepage.contact.webdevLink ) );
	container.append( makeLink( 'samples', texts.homepage.contact.samplesLink ) );
	container.append( makeLink( 'contact', texts.homepage.contact.contactLink ) );

})();

//

let skipAnimation;
let frameCount = 0;

loop();

function loop() {

	requestAnimationFrame( loop );

	frameCount ++;

	if ( ( frameCount % 2 ) === 0 || skipAnimation ) return

	//

	let speedRatio = clock.getDelta() / ( 1 / 30 );

	speedRatio = speedRatio > 10 ? 10 : speedRatio;

	// decide which scene must be animated

	const currentPos = window.scrollY / getSceneContainerHeight();

	scenes[ Math.round( currentPos ) ].animate( speedRatio );

}

function stopOrStartAnim( currentLocation ) {

	if ( currentLocation === 'home' ) {

		skipAnimation = false;

	} else {

		skipAnimation = true;

	}

}

//

function blurHomepage() {
	scenesContainers.forEach( (domElement) => {
		domElement.classList.add( 'blurry' );
	});
};

function focusHomepage() {
	scenesContainers.forEach( (domElement) => {
		domElement.classList.remove( 'blurry' );
	});
}

//

function getSceneContainerHeight() {
	return document.querySelector('#dummy-container').getBoundingClientRect().height;
}

/*
I had to make this horrible workaround to keep iOS Safari from firing click
events on buttons hidden by scene-containers clip-path. The thing worked on
chromium, but hey...
So this disgusting hack check every 50ms which button should be clickable,
and disable the others
*/

let lastClickablePage = 0;

setInterval( () => {

	// disable click events for all ".scene-container" elements

	scenesContainers.forEach( (domElement) => {

		domElement.parentNode.classList.remove( 'clickable' );

	});

	// enable click event for the ".scene-container" element currently in view

	const currentScroll = window.scrollY;

	const sceneHeight = getSceneContainerHeight();

	const currentClickablePage = Math.floor( (currentScroll + ( sceneHeight * 0.7 )) / sceneHeight );

	if ( currentClickablePage !== lastClickablePage ) {

		scenesContainers[ currentClickablePage ].parentNode.classList.add( 'clickable' );

	}

}, 50 );

//

export { stopOrStartAnim }
export { blurHomepage }
export { focusHomepage }
export default container
