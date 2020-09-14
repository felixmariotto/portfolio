
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import { workbenchMisc, workbenchBoard } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Doc( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #fff5fa 0%, #d7cedb 62%, #aebcd1 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	// scene.background = new THREE.Color( 0xffd1de );
	scene.fog = new THREE.Fog( 0xffe0e9, 0.48, 1.12 );

	renderer.domElement.style.opacity = "0.92";

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

	light.shadow.radius = 5;

	light.target.position.z -= 0.5;

	scene.add( light, new THREE.AmbientLight( 0xffffff, 0.25 ) );

	// camera position

	let targetOffsetX = 0;
	let targetOffsetZ = 0;

	const cameraGroup = new THREE.Group();
	cameraGroup.position.z += 0.3;
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	setTimeout( positionCamera, 0 );

	window.addEventListener( 'resize', positionCamera );
	
	function positionCamera() {

		let ratio = domElement.clientHeight / domElement.clientWidth;

		camera.position.set( -0.15, 0.6, 0.1 );

		if ( ratio && ratio > 1 ) {

			camera.position.multiplyScalar( ratio );

			targetOffsetX = (ratio - 1) * 0.15;
			targetOffsetZ = (ratio - 1) * -0.1;

			const newCamLength = camera.position.length();

			scene.fog.near = newCamLength - 0.15 ;
			scene.fog.far = newCamLength + 0.5;

		} else {

			camera.lookAt( 0, 0, 0 );

			scene.fog.near = 0.48;
			scene.fog.far = 1.12;

			targetOffsetX = 0;
			targetOffsetZ = 0;

		}

	};

	//

	const targetPos = new THREE.Vector2();
	const targetTarget = new THREE.Vector2();
	const currentTarget = new THREE.Vector3( 0, 0, 0.15 );

	function animate( speedRatio ) {

		targetPos.x = InputPosition.x * 0.05;
		targetPos.y = ( InputPosition.y * 0.05 ) + 0.3;

		cameraGroup.position.x += ( targetPos.x - cameraGroup.position.x ) * 0.02 * speedRatio;
		cameraGroup.position.z += ( targetPos.y - cameraGroup.position.z ) * 0.02 * speedRatio;

		//

		targetTarget.x = ( InputPosition.x * 0.02 ) - targetOffsetX;
		targetTarget.y = ( InputPosition.y * 0.02 ) + 0.15 - targetOffsetZ;

		currentTarget.x += ( targetTarget.x - currentTarget.x ) * 0.05 * speedRatio;
		currentTarget.z += ( targetTarget.y - currentTarget.z ) * 0.05 * speedRatio;

		camera.lookAt( currentTarget );

		renderer.render( scene, camera );

	};

	Promise.all([ workbenchMisc, workbenchBoard ]).then( () => {
		animate( 1 );
	});

	return { animate }

}