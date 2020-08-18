
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import { expertise } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Expertise( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 'blue' );

	scene.overrideMaterial = new THREE.MeshBasicMaterial();

	// assets

	expertise.then( (obj) => {

		scene.add( obj );

	});

	// light

	var light = new THREE.PointLight( 0xb6ffb3, 0.8, 100 );
	light.position.set( 0.1, 0.5, -0.1 );
	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xb6ffb3, 0.6 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0, 0.5, 0.2 );
	camera.lookAt( 0, 0, 0 );

	//

	const targetRot = new THREE.Vector2();
	let targetPos = 0;

	function animate( speedRatio ) {

		targetRot.y = 0.2 * -InputPosition.x;
		targetRot.x = 0.2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		//

		targetPos = InputPosition.x * -0.04;

		cameraGroup.position.x += ( targetPos - cameraGroup.position.x ) * 0.05;

		//

		renderer.render( scene, camera );

	};

	return { animate }

}