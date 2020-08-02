
import './homepage.css';

import Link from '../link/Link.js';

import Intro from './scenes/Intro.js';
import Expertise from './scenes/Expertise.js';
import Prototypes from './scenes/Prototypes.js';

//

const container = document.createElement('DIV');
container.id = "homepage-container";

//

const scenesContainers = [];

for ( let i = 0 ; i < 3 ; i++ ) {

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

}

//

export default container
