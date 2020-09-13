
import * as THREE from 'three';

import Easing from './Easing.js';

//

const DEVICE_MOTION_SENSITIVITY = 2;
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

			deviceRotation.x -= deviceRotation.x * 0.07;
			deviceRotation.y -= deviceRotation.y * 0.07;

			if (
				Math.abs( deviceRotation.x ) < 0.5 &&
				Math.abs( deviceRotation.y ) < 0.5
			) {
				clearInterval( intervalToken );
				intervalToken = undefined
			};

			//

			inputPosition.x = ( deviceRotation.x / CAP_VALUE );
			inputPosition.y = ( deviceRotation.y / CAP_VALUE );

			inputPosition.x = THREE.MathUtils.clamp( inputPosition.x, -1, 1 );
			inputPosition.y = THREE.MathUtils.clamp( inputPosition.y, -1, 1 );

		}, 15 );

	}

}

//

window.addEventListener( 'devicemotion', (e) => {

	const rot = e.rotationRate
	
	deviceRotation.x = rot.beta ? deviceRotation.x + ( rot.beta * DEVICE_MOTION_SENSITIVITY ) : deviceRotation.x;
	deviceRotation.y = rot.alpha ? deviceRotation.y + ( rot.alpha * DEVICE_MOTION_SENSITIVITY ) : deviceRotation.y;

	// clamp values to avoid wild input

	deviceRotation.x = THREE.MathUtils.clamp( deviceRotation.x, -1 * CAP_VALUE, CAP_VALUE );
	deviceRotation.y = THREE.MathUtils.clamp( deviceRotation.y, -1 * CAP_VALUE, CAP_VALUE );

	// gently tween deviceRotation values back to 0

	tweenRotationBack();

})

//

export default inputPosition