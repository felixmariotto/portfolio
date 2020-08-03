
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import Easing from './core/Easing.js';

import * as THREE from 'three';

//

export default function Casting( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	const geometry = new THREE.SphereBufferGeometry( 0.1, 16, 16 );
	const material = new THREE.MeshLambertMaterial();

	// parts

	const partTop = new THREE.Mesh( geometry, material );
	const partRight = new THREE.Mesh( geometry, material );
	const partBottom = new THREE.Mesh( geometry, material );
	const partLeft = new THREE.Mesh( geometry, material );

	scene.add( partTop, partRight, partBottom, partLeft );

	// light

	scene.add( ShadowedLight({ color: 0xffa1c2 }) );
	scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.z = 1;
	camera.lookAt( 0, 0, 0 );

	//

	const targetRot = new THREE.Vector2();
	let time = 0;

	function animate() {

		// animation

		time = ( time + 0.002 ) % 1;

			// top part

			if ( time < 0.25 ) {

				const t = Easing.easeOutQuart( time * 4 );

				partTop.position.set( 0, THREE.MathUtils.lerp( 0.4, 0.1, t ), 0 );

			} else {

				partTop.position.set( 0, 0.1, 0 );

			}

			// bottom part

			if ( time < 0.25 ) {

				partBottom.position.set( 0, -0.4, 0 );

			} else if ( time > 0.5 ) {

				partBottom.position.set( 0, -0.1, 0 );

			} else {

				const t = Easing.easeOutQuart( ( time - 0.25 ) * 4 );

				partBottom.position.set( 0, THREE.MathUtils.lerp( -0.4, -0.1, t ), 0 );

			}

			// left part

			if ( time < 0.5 ) {

				partLeft.position.set( -0.4, 0, 0 );

			} else if ( time > 0.75 ) {

				partLeft.position.set( -0.1, -0, 0 );

			} else {

				const t = Easing.easeOutQuart( ( time - 0.5 ) * 4 );

				partLeft.position.set( THREE.MathUtils.lerp( -0.4, -0.1, t ), 0, 0 );

			}

			// right part

			if ( time < 0.75 ) {

				partRight.position.set( 0.4, 0, 0 );

			} else {

				const t = Easing.easeOutQuart( ( time - 0.75 ) * 4 );

				partRight.position.set( THREE.MathUtils.lerp( 0.4, 0.1, t ), 0, 0 );

			}

		// camera

		targetRot.y = 1 * -InputPosition.x;
		targetRot.x = 1 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}