
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import Easing from './core/Easing.js';
import { ring1, ring2, head1, head2 } from './core/Assets.js';
import { marquiseBig, marquiseMedium, marquiseSmall, pearBig, pearMedium, pearSmall } from './core/Assets.js';

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

	/// ASSETS

	// material

	const EXTENSION = 'jpg';

	const envMap = new THREE.CubeTextureLoader()
					.setPath( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/' )
					.load( [ `px.${ EXTENSION }`, `nx.${ EXTENSION }`, `py.${ EXTENSION }`, `ny.${ EXTENSION }`, `pz.${ EXTENSION }`, `nz.${ EXTENSION }` ] );

	const roughnessMap = new THREE.TextureLoader().load( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/metal_roughness.jpg' )

	const material = new THREE.MeshStandardMaterial({
		envMap,
		roughnessMap,
		metalness: 1
	});

	const instanceMaterial = material.clone();

	// unique parts

	const ring1Group = new THREE.Group();
	const ring2Group = new THREE.Group();
	const head1Group = new THREE.Group();
	const head2Group = new THREE.Group();

	ring1.then( ( loadedObj ) => { initObj( loadedObj, ring1Group ) } );
	ring2.then( ( loadedObj ) => { initObj( loadedObj, ring2Group ) } );
	head1.then( ( loadedObj ) => { initObj( loadedObj, head1Group ) } );
	head2.then( ( loadedObj ) => { initObj( loadedObj, head2Group ) } );

	// instanced parts

	const instancedMeshes = {};

	const marquiseBigDummy1 = new THREE.Object3D();
	const marquiseBigDummy2 = new THREE.Object3D();
	const marquiseBigDummy3 = new THREE.Object3D();

	const marquiseMediumDummy1 = new THREE.Object3D();
	const marquiseMediumDummy2 = new THREE.Object3D();

	const marquiseSmallDummy1 = new THREE.Object3D();
	const marquiseSmallDummy2 = new THREE.Object3D();
	const marquiseSmallDummy3 = new THREE.Object3D();

	marquiseBig.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'marquiseBig', 3 ) } );
	marquiseMedium.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'marquiseMedium', 2 ) } );
	marquiseSmall.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'marquiseSmall', 3 ) } );
	
	// pearBig.then( ( loadedObj ) => { initObj( loadedObj, pearBigGroup ) } );
	// pearMedium.then( ( loadedObj ) => { initObj( loadedObj, pearMediumGroup ) } );
	// pearSmall.then( ( loadedObj ) => { initObj( loadedObj, pearSmallGroup ) } );

	function initObj( obj, group ) {

		obj.scale.setScalar( 0.01 );

		obj.traverse( (child) => {

			if ( child.isMesh ) child.material = material;

		});

		group.add( obj );
		scene.add( group );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	}

	function initInstancedMesh( obj, name, number ) {

		obj.children[ 0 ].geometry.scale( 0.01, 0.01, 0.01 );
		obj.children[ 0 ].geometry.rotateX( Math.PI / 2 );

		instancedMeshes[ name ] = new THREE.InstancedMesh(
			obj.children[ 0 ].geometry,
			instanceMaterial,
			number
		);

		instancedMeshes[ name ].instanceMatrix.setUsage( THREE.DynamicDrawUsage );

		scene.add( instancedMeshes[ name ] );

	}

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

		// parts animation

		if ( instancedMeshes.marquiseBig ) {

			// marquise 1

			marquiseBigDummy1.position.set( 0.045, 0.10, 0.005 );
			marquiseBigDummy1.rotation.y = Math.PI / 2.3;
			marquiseBigDummy1.updateMatrix();

			instancedMeshes.marquiseBig.setMatrixAt( 0, marquiseBigDummy1.matrix );

			// marquise 2

			marquiseBigDummy2.position.set( 0.032, 0.10, -0.03 );
			marquiseBigDummy2.rotation.y = 0.1;
			marquiseBigDummy2.updateMatrix();

			instancedMeshes.marquiseBig.setMatrixAt( 1, marquiseBigDummy2.matrix );

			// marquise 3

			marquiseBigDummy3.position.set( 0.065, 0.10, -0.0135 );
			marquiseBigDummy3.rotation.y = Math.PI / 1.75;
			marquiseBigDummy3.updateMatrix();

			instancedMeshes.marquiseBig.setMatrixAt( 2, marquiseBigDummy3.matrix );

			//

			instancedMeshes.marquiseBig.instanceMatrix.needsUpdate = true;

		}

		if ( instancedMeshes.marquiseMedium ) {

			// marquise 1

			marquiseMediumDummy1.position.set( 0.051, 0.104, -0.044 );
			marquiseMediumDummy1.rotation.z = 0.1;
			marquiseMediumDummy1.rotation.x = 0.1;
			marquiseMediumDummy1.updateMatrix();

			instancedMeshes.marquiseMedium.setMatrixAt( 0, marquiseMediumDummy1.matrix );

			// marquise 2

			marquiseMediumDummy2.position.set( 0.082, 0.104, -0.032 );
			marquiseMediumDummy2.rotation.z = -0.5;
			marquiseMediumDummy2.rotation.x = 0.5;
			marquiseMediumDummy2.rotation.y = Math.PI / 1.75;
			marquiseMediumDummy2.updateMatrix();

			instancedMeshes.marquiseMedium.setMatrixAt( 1, marquiseMediumDummy2.matrix );

			//

			instancedMeshes.marquiseMedium.instanceMatrix.needsUpdate = true;

		}

		if ( instancedMeshes.marquiseSmall ) {

			// marquise 1

			marquiseSmallDummy1.position.set( 0.08, 0.106, -0.04 );
			marquiseSmallDummy1.updateMatrix();

			instancedMeshes.marquiseSmall.setMatrixAt( 0, marquiseSmallDummy1.matrix );

			//

			instancedMeshes.marquiseSmall.instanceMatrix.needsUpdate = true;

		};

		// camera

		targetRot.y = 2 * -InputPosition.x;
		targetRot.x = 2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}