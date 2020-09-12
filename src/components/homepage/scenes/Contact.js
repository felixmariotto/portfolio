
import Startup from './core/Startup.js';
import Particles from './core/Particles.js';
import InputPosition from './core/InputPosition.js';

import * as THREE from 'three';

//

export default function Contact( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #8c8e91 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	camera.position.z = -1;
	camera.lookAt( 0, 0, 0 );

	//

	const particles = Particles();
	scene.add( particles.container );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );

	camera.position.z = 1;
	camera.lookAt( 0, 0, 0 );
	cameraGroup.add( camera );

	//

	const targetRot = new THREE.Vector2();

	function animate( speedRatio ) {

		targetRot.y = 0.25 * -InputPosition.x;
		targetRot.x = 0.1 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02 * speedRatio;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02 * speedRatio;

		camera.lookAt( 0, 0, 0 );

		particles.update( speedRatio );

		renderer.render( scene, camera );

	};

	animate( 1 );

	return { animate }

}