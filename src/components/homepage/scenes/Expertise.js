
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';

import * as THREE from 'three';

//

export default function Expertise( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 'blue' );

	// table

	const tableGeometry = new THREE.BoxBufferGeometry( 1.5, 0.02, 1.5 );
	const tableMaterial = new THREE.MeshLambertMaterial({ color: 0xd1b682 });

	scene.add( new THREE.Mesh( tableGeometry, tableMaterial ) );

	// papers

	const paperGeometry = new THREE.PlaneBufferGeometry( 0.21, 0.297 );
	paperGeometry.rotateX( -Math.PI / 2 );
	const paperMaterial = new THREE.MeshBasicMaterial({ color: 0xebe9e4 });

	const paper1 = new THREE.Mesh( paperGeometry, paperMaterial );
	paper1.position.set( -0.1, 0.2, 0 );
	paper1.rotation.y = 0.1;
	scene.add( paper1 );

	const paper2 = new THREE.Mesh( paperGeometry, paperMaterial );
	paper2.position.set( 0.1, 0.2, 0.1 );
	paper2.rotation.y = -0.2;
	scene.add( paper2 );

	// pen

	const penGeometry = new THREE.BoxBufferGeometry( 0.013, 0.013, 0.15 );
	const penMaterial = new THREE.MeshLambertMaterial({ color: 0xb06bff });

	const pen = new THREE.Mesh( penGeometry, penMaterial );
	pen.position.set( -0.05, 0.2, 0 );
	pen.rotation.y = -0.5;

	scene.add( pen );

	// light

	var light = new THREE.PointLight( 0xffffff, 1, 100 );
	light.position.set( 0.1, 0.5, -0.1 );
	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.8 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0, 0.5, 0.2 );
	camera.lookAt( 0, 0, 0 );

	//

	const targetRot = new THREE.Vector2();

	function animate() {

		targetRot.y = 0.08 * -InputPosition.x;
		targetRot.x = 0.04 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}