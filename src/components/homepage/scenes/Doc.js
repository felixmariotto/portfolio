
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';

import * as THREE from 'three';

//

export default function Doc( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 0xd7cbb1 );
	scene.fog = new THREE.FogExp2( 0xd7cbb1, 1 );

	// table

	const tableGeometry = new THREE.BoxBufferGeometry( 3, 0.06, 3 );
	const tableMaterial = new THREE.MeshLambertMaterial({ color: 0x6b593c });

	const table = new THREE.Mesh( tableGeometry, tableMaterial )
	table.position.z -= 1.4;

	scene.add( table );

	// bench pin

	const pinGeometry = new THREE.BoxBufferGeometry( 0.07, 0.05, 0.15 );
	const pinMaterial = new THREE.MeshLambertMaterial({ color: 0x6b593c });

	const pin = new THREE.Mesh( pinGeometry, pinMaterial )
	pin.position.z = 0.12;

	scene.add( pin );

	// papers

	const paperGeometry = new THREE.PlaneBufferGeometry( 0.21, 0.297 );
	paperGeometry.rotateX( -Math.PI / 2 );
	const paperMaterial = new THREE.MeshLambertMaterial();

	const paper1 = new THREE.Mesh( paperGeometry, paperMaterial );
	paper1.position.set( -0.1, 0.035, -0.1 );
	paper1.rotation.y = 0.1;
	scene.add( paper1 );

	const paper2 = new THREE.Mesh( paperGeometry, paperMaterial );
	paper2.position.set( 0.1, 0.035, -0.2 );
	paper2.rotation.y = -0.2;
	scene.add( paper2 );

	// light

	const spotLight = new THREE.SpotLight( 0xffffff, 1, 1.5 );
	spotLight.decay = 0;
	spotLight.position.set( 0.1, 3, 0.1 );

	scene.add( spotLight, new THREE.AmbientLight( 0xffffff, 0.7 ) );

	var spotLightHelper = new THREE.SpotLightHelper( spotLight );
	scene.add( spotLightHelper );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0, 0.5, 0.5 );
	camera.lookAt( 0, 0, 0 );

	//

	const targetRot = new THREE.Vector2();

	function animate() {

		targetRot.y = 0.15 * -InputPosition.x;
		targetRot.x = 0.4 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}