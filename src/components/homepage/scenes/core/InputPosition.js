
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

let intervalToken;

function tweenRotationBack() {

	if ( !intervalToken ) {

		intervalToken = setInterval( () => {

			deviceRotation.x += ( 0 - deviceRotation.x ) * 0.1;
			deviceRotation.y += ( 0 - deviceRotation.y ) * 0.1;

			if (
				Math.abs( deviceRotation.x ) < 0.5 &&
				Math.abs( deviceRotation.y ) < 0.5
			) {
				clearInterval( intervalToken );
				intervalToken = undefined
			};

			console.log( deviceRotation );

		}, 15 );

	}

}

//

window.addEventListener( 'devicemotion', (e) => {

	const rot = e.rotationRate

	deviceRotation.x = rot.beta ? deviceRotation.x + rot.beta : deviceRotation.x;
	deviceRotation.y = rot.gamma ? deviceRotation.y + rot.gamma : deviceRotation.y;

	tweenRotationBack();

})

//

export default inputPosition