
import * as THREE from 'three';

import Easing from './Easing.js';

//

// factor by which device motion multiply inputPosition normal values
const DEVICE_MOTION_POWER = 2;
const CAP_VALUE = 400;

const inputPosition = new THREE.Vector2();

//

let cancelUpdate;

window.addEventListener( 'touchstart', () => {

	cancelUpdate = true;

});

window.addEventListener( 'mousemove', (e) => {

	if ( cancelUpdate ) return

	inputPosition.x = ( ( e.clientX / window.innerWidth ) * 2 ) - 1;
	inputPosition.y = ( ( e.clientY / window.innerHeight ) * 2 ) - 1;

});

//

const deviceRotation = new THREE.Vector2();

//

let intervalToken;

function tweenRotationBack() {

	if ( !intervalToken ) {

		intervalToken = setInterval( () => {

			deviceRotation.x -= deviceRotation.x * 0.1;
			deviceRotation.y -= deviceRotation.y * 0.1;

			if (
				Math.abs( deviceRotation.x ) < 0.5 &&
				Math.abs( deviceRotation.y ) < 0.5
			) {
				clearInterval( intervalToken );
				intervalToken = undefined
			};

			// report the recorded rotation to a [ 0 1 ] range,
			// then copy it into inputPosition for camera positioning in scenes.

			inputPosition.x = DEVICE_MOTION_POWER * ( deviceRotation.x / CAP_VALUE );
			inputPosition.y = DEVICE_MOTION_POWER * ( deviceRotation.x / CAP_VALUE );

		}, 15 );

	}

}

//

window.addEventListener( 'devicemotion', (e) => {

	const rot = e.rotationRate
	
	deviceRotation.x = rot.beta ? deviceRotation.x + rot.beta : deviceRotation.x;
	deviceRotation.y = rot.alpha ? deviceRotation.y + rot.alpha : deviceRotation.y;

	// clamp values to avoid wild input

	deviceRotation.x = THREE.MathUtils.clamp( deviceRotation.x, -1 * CAP_VALUE, CAP_VALUE );
	deviceRotation.y = THREE.MathUtils.clamp( deviceRotation.y, -1 * CAP_VALUE, CAP_VALUE );

	// gently tween deviceRotation values back to 0

	tweenRotationBack();

})

//

export default inputPosition