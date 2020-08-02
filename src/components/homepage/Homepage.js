
import './homepage.css';

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

	scenesContainers.push( sceneContainer );
	container.append( sceneContainer );

};

// Create scenes and add them to dom elements

const intro = Intro( scenesContainers[ 0 ] );
const expertise = Expertise( scenesContainers[ 1 ] );
const prototypes = Prototypes( scenesContainers[ 1 ] );

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