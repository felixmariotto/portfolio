
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';
import { expertise } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Expertise( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	renderer.domElement.style.opacity = "0.7";

	// scene.fog = new THREE.Fog( 0xffffff, 0.05, 1.2 );

	scene.fog = new THREE.FogExp2( 0x00ff95, 0.5 )

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

	// light

	const light = ShadowedLight({
		bias: -0.0001,
		color: 0xffffff,
		x: -1,
		y: 2,
		z: -2,
		intensity: 0.6,
		width: 1
	});

	light.shadow.radius = 10;

	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.7 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0, 0.4, 0.2 );
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