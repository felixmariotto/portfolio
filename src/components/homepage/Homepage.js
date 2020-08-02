
import './homepage.css';

import Link from '../link/Link.js';

import Intro from './scenes/Intro.js';
import Expertise from './scenes/Expertise.js';
import Prototypes from './scenes/Prototypes.js';
import Casting from './scenes/Casting.js';
import Doc from './scenes/Doc.js';
import Contact from './scenes/Contact.js';

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

// Create scenes and add them to dom elements

const intro = Intro( scenesContainers[ 0 ] );
const expertise = Expertise( scenesContainers[ 1 ] );
const prototypes = Prototypes( scenesContainers[ 2 ] );
const casting = Casting( scenesContainers[ 3 ] );
const doc = Doc( scenesContainers[ 4 ] );
const contact = Contact( scenesContainers[ 5 ] );

// Textual UI

(function introUI() {

	const container = document.createElement('DIV');
	container.id = 'intro-textual-ui';
	container.innerHTML = 'High Jewellery Design';

	scenesContainers[ 0 ].append( container );

})();

(function expertiseUI() {

	const container = document.createElement('DIV');
	container.id = 'expertise-textual-ui';

	scenesContainers[ 1 ].append( container );

	//

	const link = Link( 'expertise' );
	link.innerHTML = 'expertise';

	container.append( link );

})();

//

loop();

function loop() {

	requestAnimationFrame( loop );

	intro.animate();
	expertise.animate();
	prototypes.animate();
	casting.animate();
	doc.animate();
	contact.animate();

}

//

export default container
