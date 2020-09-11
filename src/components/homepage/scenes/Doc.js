
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import { workbenchMisc, workbenchBoard } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Doc( domElement ) {

	const { scene, camera, renderer } = Startup( domElement );

	scene.background = new THREE.Color( 0xffd1de );
	scene.fog = new THREE.FogExp2( 0xffd1de, 1 );

	// assets

	workbenchBoard.then( (obj) => {

		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	workbenchMisc.then( (obj) => {

		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

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

	camera.position.set( -0.2, 0.6, 0.25 );
	camera.lookAt( 0.05, 0, -0.05 );

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