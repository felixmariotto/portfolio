
import './homepage.css';

import * as THREE from 'three';

import Link from '../link/Link.js';

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
	else {

		arrow.addEventListener( 'click', () => {

			const sceneHeight = document.body.clientHeight * 1.4;

			window.scrollTo({
				top: sceneHeight * (i + 1),
				behavior: 'smooth'
			});

		})
		
	}

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
	link.innerHTML = text ? text + '&#xA0;&#xA0;&#xA0;' : 'learn more&#xA0;&#xA0;&#xA0;';
	link.append( icon );

	return link

};

(function introUI() {

	const container = document.createElement('H1');
	container.id = 'intro-textual-ui';
	container.classList.add('textual-ui')
	container.innerHTML = 'High Jewellery Design';

	scenesContainers[ 0 ].append( container );

})();

(function expertiseUI() {

	const container = document.createElement('DIV');
	container.id = 'expertise-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 1 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = "Consulting";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "Do you need advise on how to design and manage a high jewelry project ? As I have experience working with the most picky high jewelry companies, I can assist you."

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
	title.innerHTML = "Prototypes & viewers";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "Early in development you will review resin prototypes or photorealistic viewers, in order to pinpoint issues fast and respect your schedules.";

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
	title.innerHTML = "Casting parts";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "Once your jewel is designed, I can supply lost-wax casting parts in all kind of metals : silver, gold, platinum, or even titanium. You only have to assemble them."

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
	title.innerHTML = "Technical sheets";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "Assembling your jewel will go unhindered, thanks to the technical documentation I provide with each finished project. Assembling sheets, stone setting plans, everything is covered."

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
	title.innerHTML = "More information :";

	container.append( title );

	// links

	container.append( makeLink( 'webdev', 'Web development' ) );
	container.append( makeLink( 'samples', 'See some samples' ) );
	container.append( makeLink( 'contact', 'Contact' ) );

})();

//

loop();

function loop() {

	const speedRatio = clock.getDelta() / ( 1 / 60 );

	requestAnimationFrame( loop );

	// decide which scenes must be animated

	const currentPos = document.documentElement.scrollTop / (document.body.clientHeight * 1.4);

	/* animate two visible scenes

	const toAnimate = new Set([ Math.floor( currentPos ), Math.ceil( currentPos ) ]);

	toAnimate.forEach( (id) => {

		if ( id > 5 ) return

		scenes[ id ].animate();

	});

	*/

	scenes[ Math.round( currentPos ) ].animate( speedRatio );

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

export { blurHomepage }
export { focusHomepage }
export default container
