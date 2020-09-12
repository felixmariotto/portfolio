
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';
import { expertise } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Expertise( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #022559 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	renderer.domElement.style.opacity = "0.85";

	scene.fog = new THREE.Fog( 0x0095ff, 0.25, 1.1 );
	scene.background = new THREE.Color( 0xf7f7f7 );

	// assets

	expertise.then( (obj) => {

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	// plane

	var planeGeometry = new THREE.PlaneBufferGeometry( 2, 2 );
	var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xd1d1d1 });
	var plane = new THREE.Mesh( planeGeometry, planeMaterial );
	plane.rotation.x = -Math.PI / 2;
	plane.receiveShadow = true;
	scene.add( plane );

	// light

	const light = ShadowedLight({
		bias: -0.0001,
		color: 0xffffff,
		x: -1,
		y: 2,
		z: -2,
		intensity: 0.57,
		width: 0.5,
		near: 2,
		far: 4,
		resolution: 1024
	});

	light.shadow.radius = 5;

	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.55 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	setTimeout( positionCamera, 0 );

	window.addEventListener( 'resize', positionCamera );
	
	function positionCamera() {

		let ratio = domElement.clientHeight / domElement.clientWidth;

		camera.position.set( 0, 0.4, 0.2 );

		if ( ratio && ratio > 1 ) {

			camera.position.multiplyScalar( ratio );

			camera.lookAt( 0, 0, (ratio - 1) * 0.15 );

			const newCamLength = camera.position.length();

			scene.fog.near = newCamLength - 0.15 ;
			scene.fog.far = newCamLength + 0.45;

		} else {

			camera.lookAt( 0, 0, 0 );

			scene.fog.near = 0.25;
			scene.fog.far = 1.1;

		}

	};

	//

	const targetRot = new THREE.Vector2();
	let targetPos = 0;

	function animate( speedRatio ) {

		targetRot.y = 0.2 * -InputPosition.x;
		targetRot.x = 0.2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02 * speedRatio;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02 * speedRatio;

		//

		targetPos = InputPosition.x * -0.04;

		cameraGroup.position.x += ( targetPos - cameraGroup.position.x ) * 0.05 * speedRatio;

		//

		renderer.render( scene, camera );

	};

	expertise.then( () => {
		animate( 1 );
	});

	return { animate }

}