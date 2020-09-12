
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import { workbenchMisc, workbenchBoard } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Doc( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 0xffd1de );
	// scene.fog = new THREE.FogExp2( 0xffd1de, 1 );

	// assets

	workbenchBoard.then( (obj) => {

		obj.position.z += 0.18;
		obj.position.x -= 0.052;
		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material = new THREE.MeshLambertMaterial();

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	workbenchMisc.then( (obj) => {

		obj.position.z += 0.18;
		obj.position.x -= 0.052;
		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			// if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	// light

	const light = ShadowedLight({
		bias: -0.0001,
		color: 0xffffff,
		x: -0.3,
		y: 4,
		z: -1,
		intensity: 1,
		width: 0.71,
		near: 3.8,
		far: 4.5,
		resolution: 1024
	});

	light.shadow.radius = 10;

	light.target.position.z -= 0.5;

	var helper = new THREE.CameraHelper( light.shadow.camera );
	scene.add( helper );

	scene.add( light, new THREE.AmbientLight( 0xffffff, 0.1 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	// camera.position.set( -0.15, 0.6, 0.3 );
	camera.position.set( -0.2, 0.8, 0.4 );
	camera.lookAt( 0.05, 0, -0.05 );

	//

	const targetRot = new THREE.Vector2();

	function animate() {

		targetRot.y = 2 * -InputPosition.x;
		targetRot.x = 2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}