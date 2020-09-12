
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

			// if ( child.material ) child.material = new THREE.MeshLambertMaterial();

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

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

			// clone for shadows

			if ( child.isMesh ) {

				const clone = child.clone();
				const matClone = child.material.clone();

				clone.material = matClone;
				matClone.side = THREE.BackSide;

				clone.position.z += 0.18;
				clone.position.x -= 0.052;
				clone.position.y -= 0.0012;
				clone.scale.setScalar( 0.02 );

				scene.add( clone );

			}

		})

	});

	// light

	const light = ShadowedLight({
		bias: -0.0005,
		color: 0xffffff,
		x: -0.3,
		y: 4,
		z: -1,
		intensity: 0.85,
		width: 0.71,
		near: 3.8,
		far: 4.5,
		resolution: 1024
	});

	light.shadow.radius = 7;

	light.target.position.z -= 0.5;

	scene.add( light, new THREE.AmbientLight( 0xffffff, 0.35 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	cameraGroup.position.z += 0.3;
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( -0.15, 0.6, 0.1 );

	//

	const targetPos = new THREE.Vector2();
	const targetTarget = new THREE.Vector2();
	const currentTarget = new THREE.Vector3( 0, 0, 0.15 );

	function animate() {

		/*
		targetRot.y = 0.4 * -InputPosition.x;
		targetRot.x = 0.2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;
		*/

		targetPos.x = InputPosition.x * 0.05;
		targetPos.y = ( InputPosition.y * 0.05 ) + 0.3;

		cameraGroup.position.x += ( targetPos.x - cameraGroup.position.x ) * 0.02;
		cameraGroup.position.z += ( targetPos.y - cameraGroup.position.z ) * 0.02;

		//

		targetTarget.x = InputPosition.x * 0.03;
		targetTarget.y = ( InputPosition.y * 0.03 ) + 0.15;

		currentTarget.x += ( targetTarget.x - currentTarget.x ) * 0.02;
		currentTarget.z += ( targetTarget.y - currentTarget.z ) * 0.02;

		camera.lookAt( currentTarget );

		renderer.render( scene, camera );

	};

	return { animate }

}