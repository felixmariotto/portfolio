
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';
import { prototypes } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Prototypes( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 0xd7cbb1 );
	scene.fog = new THREE.FogExp2( 0xd7cbb1, 1 );

	// plane

	var planeGeometry = new THREE.PlaneBufferGeometry( 2, 2 );
	var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xd1d1d1 });
	var plane = new THREE.Mesh( planeGeometry, planeMaterial );
	plane.rotation.x = -Math.PI / 2;
	plane.receiveShadow = true;
	scene.add( plane );

	// ASSETS

	prototypes.then( (obj) => {

		obj.scale.setScalar( 0.01 );

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	// light

	// light

	const light = ShadowedLight({
		bias: -0.0001,
		color: 0xffffff,
		x: -1,
		y: 2,
		z: 1,
		intensity: 0.6,
		width: 0.5,
		near: 2,
		far: 4,
		resolution: 1024
	});

	light.shadow.radius = 10;

	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.7 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	setTimeout( positionCamera, 0 );

	window.addEventListener( 'resize', positionCamera );
	
let test;

	function positionCamera() {

		let ratio = domElement.clientHeight / domElement.clientWidth;

		camera.position.set( 0.05, 0.2, 0.2 );
		
		if ( ratio && ratio > 1 ) {

			camera.position.multiplyScalar( ratio * 1.1 );

			camera.lookAt( (0.05 / ratio) , 0.08, (ratio - 1) * 0.13 );

			// scene.fog.density = 0.7 / ratio;

		} else {

			camera.lookAt( 0.05, 0.08, 0 );

			// scene.fog.density = 0.7;

		}

	};

	//

	const targetRot = new THREE.Vector2();
	let targetPos = 0.2;

	function animate() {

		targetRot.y = 0.2 * -InputPosition.x;

		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		//

		/*

		targetPos = 0.2 + ( 0.04 * -InputPosition.y );

		camera.position.y += ( targetPos - camera.position.y ) * 0.02;

		camera.lookAt( 0, 0.08, 0 );

		*/

		//

		renderer.render( scene, camera );

	};

	return { animate }

}