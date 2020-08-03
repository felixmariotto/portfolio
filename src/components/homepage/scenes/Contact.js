
import Startup from './core/Startup.js';

import * as THREE from 'three';

//

export default function Contact( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #8c8e91 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	camera.position.z = -1;
	camera.lookAt( 0, 0, 0 );

	//

	function animate() {

		renderer.render( scene, camera );

	};

	return { animate }

}