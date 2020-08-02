
import './homepage.css';

import Intro from './scenes/Intro.js';

//

const container = document.createElement('DIV');
container.id = "homepage-container";

//

const scenesContainers = [];

for ( let i = 0 ; i < 1 ; i++ ) {

	const sceneContainer = document.createElement('DIV');
	sceneContainer.classList.add( 'scene-container' );

	scenesContainers.push( sceneContainer );
	container.append( sceneContainer );

};

// Create scenes and add them to dom elements

const intro = Intro( scenesContainers[ 0 ] );

//

loop();

function loop() {

	requestAnimationFrame( loop );

	intro.animate();

}

//

export default container