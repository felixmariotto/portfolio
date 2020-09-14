
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

	const arrow = document.createElement('I');
	arrow.classList.add('fa', 'fa-caret-down');

	if ( i === 0 ) arrow.classList.add('first');

	arrow.addEventListener( 'click', () => {

		window.scrollTo({
			top: getSceneContainerHeight() * (i + 1),
			behavior: 'smooth'
		});

	})

	sceneContainer.append( arrow );

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

function makeLink( linkTo, text ) {

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-long-arrow-right');

	const link = Link( linkTo );
	link.innerHTML = text ? text + '&#xA0;&#xA0;&#xA0;' : texts.homepage.global.more + '&#xA0;&#xA0;&#xA0;';
	link.append( icon );

	return link

};

(function introUI() {

	const container = document.createElement('H1');
	container.id = 'intro-textual-ui';
	container.classList.add('textual-ui')
	container.innerHTML = texts.homepage.intro.intro;

	scenesContainers[ 0 ].append( container );

})();

(function expertiseUI() {

	const container = document.createElement('DIV');
	container.id = 'expertise-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 1 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = texts.homepage.expertise.title;

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = texts.homepage.expertise.text;

	container.append( speech );

	// link

	container.append( makeLink( 'expertise' ) );

})();

(function prototypesUI() {

	const container = document.createElement('DIV');
	container.id = 'prototypes-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 2 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = texts.homepage.prototypes.title;

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = texts.homepage.prototypes.text;

	container.append( speech );

	// link

	container.append( makeLink( 'prototypes' ) );

})();

(function castingUI() {

	const container = document.createElement('DIV');
	container.id = 'casting-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 3 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = texts.homepage.casting.title;

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = texts.homepage.casting.text;

	container.append( speech );

	// link

	container.append( makeLink( 'casting parts' ) );

})();

(function docUI() {

	const container = document.createElement('DIV');
	container.id = 'doc-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 4 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = texts.homepage.doc.title;

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = texts.homepage.doc.text;

	container.append( speech );

	// link

	container.append( makeLink( 'technical doc' ) );

})();

(function contactUI() {

	const container = document.createElement('DIV');
	container.id = 'contact-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 5 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = texts.homepage.contact.title;

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

	let speedRatio = clock.getDelta() / ( 1 / 60 );

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

//

export { stopOrStartAnim }
export { blurHomepage }
export { focusHomepage }
export default container
