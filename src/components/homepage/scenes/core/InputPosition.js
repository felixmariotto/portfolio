
import * as THREE from 'three';

//

const inputPosition = new THREE.Vector2();

//

window.addEventListener( 'mousemove', (e) => {

	inputPosition.x = ( ( e.clientX / window.innerWidth ) * 2 ) - 1;
	inputPosition.y = ( ( e.clientY / window.innerHeight ) * 2 ) - 1;

});

//

window.addEventListener( 'devicemotion', (e) => {

	console.log( e )

})

//

export default inputPosition