
import Startup from './core/Startup.js';

import * as THREE from 'three';

//

export default function Contact( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	// scene.background = new THREE.Color( 'red' );

	const geometry = new THREE.BoxGeometry( 0.6, 0.6, 0.6 );
	const material = new THREE.MeshBasicMaterial({ color: 'cyan' });

	const meshes = [];

	for ( let i = 0 ; i < 10 ; i++ ) {

		const cube = new THREE.Mesh( geometry, material );

		cube.position.x = (Math.random() - 0.5) * 1.5;
		cube.position.y = (Math.random() - 0.5) * 1.5;

		cube.rotation.x = Math.random() * Math.PI;
		cube.rotation.y = Math.random() * Math.PI;

		meshes.push( cube );

		scene.add( cube );

	}

	camera.position.z = -1;
	camera.lookAt( 0, 0, 0 );

	//

	function animate() {

		meshes.forEach( (mesh) => {

			mesh.rotation.x += 0.01;
			mesh.rotation.y += 0.01;

		});

		renderer.render( scene, camera );

	};

	return { animate }

}