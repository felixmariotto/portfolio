
import * as THREE from 'three';

//

const inputPosition = new THREE.Vector2();

//

window.addEventListener( 'mousemove', (e) => {

	inputPosition.x = ( ( e.clientX / window.innerWidth ) * 2 ) - 1;
	inputPosition.y = ( ( e.clientY / window.innerHeight ) * 2 ) - 1;

});

//

const deviceRotation = new THREE.Vector2();

//

window.addEventListener( 'devicemotion', (e) => {

	const rot = e.rotationRate

	deviceRotation.x = rot.beta ? deviceRotation.x + rot.beta : deviceRotation.x;
	deviceRotation.y = rot.gamma ? deviceRotation.y + rot.gamma : deviceRotation.y;

	console.log( deviceRotation )

})

//

export default inputPosition