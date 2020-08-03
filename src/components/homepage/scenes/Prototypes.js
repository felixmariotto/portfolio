
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';

import * as THREE from 'three';

//

export default function Prototypes( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 0xd7cbb1 );
	scene.fog = new THREE.FogExp2( 0xd7cbb1, 1 );

	// table

	const tableGeometry = new THREE.BoxBufferGeometry( 4, 0.02, 4 );
	const tableMaterial = new THREE.MeshLambertMaterial({ color: 0xffca61 });

	const table = new THREE.Mesh( tableGeometry, tableMaterial );
	table.receiveShadow = true;

	scene.add( table );

	// tablet

	const tabletGeometry = new THREE.BoxBufferGeometry( 0.25, 0.17, 0.01 );
	const tabletMaterial = new THREE.MeshLambertMaterial({ color: 0x575757 });

	const tablet = new THREE.Mesh( tabletGeometry, tabletMaterial );
	tablet.position.set( -0.04, 0.08, 0.15 );
	tablet.rotation.x = -0.7;
	tablet.castShadow = true;

	scene.add( tablet );

	// light

	scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );
	scene.add( ShadowedLight({ color: 0xffa1c2, x: 10 }) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0, 0.2, 0.5 );
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