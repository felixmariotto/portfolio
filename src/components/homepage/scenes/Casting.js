
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import Easing from './core/Easing.js';
import { ring1 } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Casting( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	// light

	const light = ShadowedLight({
		color: 0xffa1c2,
		x: -1,
		y: 2,
		z: 1,
		intensity: 3,
		resolution: 1024,
		width: 1
	})

	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );

	// assets

	const EXTENSION = 'jpg';

	const envMap = new THREE.CubeTextureLoader()
					.setPath( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/' )
					.load( [ `px.${ EXTENSION }`, `nx.${ EXTENSION }`, `py.${ EXTENSION }`, `ny.${ EXTENSION }`, `pz.${ EXTENSION }`, `nz.${ EXTENSION }` ] );

	const roughnessMap = new THREE.TextureLoader().load( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/metal_roughness.jpg' )

	const material = new THREE.MeshStandardMaterial({
		envMap,
		roughnessMap,
		metalness: 1
	})

	ring1.then( (obj) => {

		obj.scale.setScalar( 0.01 );

		obj.traverse( (child) => {

			if ( child.isMesh )  child.material = material;

		});

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.z = 0.5;
	camera.lookAt( 0, 0, 0 );

	//

	const targetRot = new THREE.Vector2();
	let time = 0;

	function animate() {

		/*

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

		*/

		// camera

		targetRot.y = 2 * -InputPosition.x;
		targetRot.x = 1 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}