
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

	scene.fog = new THREE.FogExp2( 0xffffff, 0.7 )

	// light

	const light = ShadowedLight({
		color: 0xffcfdf,
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

	//

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
	
	//

	const pearBigDummy1 = new THREE.Object3D();
	const pearBigDummy2 = new THREE.Object3D();

	const pearMediumDummy1 = new THREE.Object3D();
	const pearMediumDummy2 = new THREE.Object3D();
	const pearMediumDummy3 = new THREE.Object3D();

	const pearSmallDummy1 = new THREE.Object3D();
	const pearSmallDummy2 = new THREE.Object3D();
	const pearSmallDummy3 = new THREE.Object3D();

	pearBig.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'pearBig', 2 ) } );
	pearMedium.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'pearMedium', 3 ) } );
	pearSmall.then( ( loadedObj ) => { initInstancedMesh( loadedObj, 'pearSmall', 3 ) } );

	//

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

			marquiseMediumDummy1.position.set( 0.051, 0.104, -0.041 );
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

			marquiseSmallDummy1.position.set( 0.069, 0.109, -0.057 );
			marquiseSmallDummy1.rotation.x = 0.35;
			marquiseSmallDummy1.rotation.z = 0.2;
			marquiseSmallDummy1.updateMatrix();

			instancedMeshes.marquiseSmall.setMatrixAt( 0, marquiseSmallDummy1.matrix );

			// marquise 2

			marquiseSmallDummy2.position.set( 0.083, 0.117, -0.069 );
			marquiseSmallDummy2.rotation.x = 0.4;
			marquiseSmallDummy2.rotation.z = 0.2;
			marquiseSmallDummy2.rotation.y = -0.15;
			marquiseSmallDummy2.updateMatrix();

			instancedMeshes.marquiseSmall.setMatrixAt( 1, marquiseSmallDummy2.matrix );

			// marquise 3

			marquiseSmallDummy3.position.set( 0.096, 0.112, -0.052 );
			marquiseSmallDummy3.rotation.z = -0.8;
			marquiseSmallDummy3.rotation.x = 1.0;
			marquiseSmallDummy3.rotation.y = Math.PI / 1.5;
			marquiseSmallDummy3.updateMatrix();

			instancedMeshes.marquiseSmall.setMatrixAt( 2, marquiseSmallDummy3.matrix );

			//

			instancedMeshes.marquiseSmall.instanceMatrix.needsUpdate = true;

		};

		// pears

		if ( instancedMeshes.pearBig ) {

			// marquise 1

			pearBigDummy1.position.set( -0.047, 0.10, -0.006 );
			pearBigDummy1.rotation.y = -Math.PI / 1.6;
			pearBigDummy1.updateMatrix();

			instancedMeshes.pearBig.setMatrixAt( 0, pearBigDummy1.matrix );

			// marquise 2

			pearBigDummy2.position.set( -0.065, 0.101, 0.014 );
			pearBigDummy2.rotation.y = -Math.PI / 1.9;
			pearBigDummy2.rotation.z = 0.12;
			pearBigDummy2.updateMatrix();

			instancedMeshes.pearBig.setMatrixAt( 1, pearBigDummy2.matrix );

			//

			instancedMeshes.pearBig.instanceMatrix.needsUpdate = true;

		}

		if ( instancedMeshes.pearMedium ) {

			// marquise 1

			pearMediumDummy1.position.set( -0.029, 0.101, 0.028 );
			pearMediumDummy1.rotation.y = 0.2;
			pearMediumDummy1.updateMatrix();

			instancedMeshes.pearMedium.setMatrixAt( 0, pearMediumDummy1.matrix );

			// marquise 2

			pearMediumDummy2.position.set( -0.048, 0.103, 0.042 );
			pearMediumDummy2.rotation.y = 0.2;
			pearMediumDummy2.rotation.x = -0.12;
			pearMediumDummy2.rotation.z = -0.1;
			pearMediumDummy2.updateMatrix();

			instancedMeshes.pearMedium.setMatrixAt( 1, pearMediumDummy2.matrix );

			// marquise 3

			pearMediumDummy3.position.set( -0.08, 0.105, 0.036 );
			pearMediumDummy3.rotation.y = -Math.PI / 2.4;
			pearMediumDummy3.rotation.x = -0.5;
			pearMediumDummy3.rotation.z = -0.3;
			pearMediumDummy3.updateMatrix();

			instancedMeshes.pearMedium.setMatrixAt( 2, pearMediumDummy3.matrix );

			//

			instancedMeshes.pearMedium.instanceMatrix.needsUpdate = true;

		}

		if ( instancedMeshes.pearSmall ) {

			// marquise 1

			pearSmallDummy1.position.set( -0.063, 0.107, 0.058 );
			pearSmallDummy1.rotation.y = 0.15;
			pearSmallDummy1.rotation.x = -0.2;
			pearSmallDummy1.rotation.z = -0.15;
			pearSmallDummy1.updateMatrix();

			instancedMeshes.pearSmall.setMatrixAt( 0, pearSmallDummy1.matrix );

			// marquise 2

			pearSmallDummy2.position.set( -0.089, 0.109, 0.056 );
			pearSmallDummy2.rotation.y = -Math.PI / 2.5;
			pearSmallDummy2.rotation.x = -0.7;
			pearSmallDummy2.rotation.z = -0.5;
			pearSmallDummy2.updateMatrix();

			instancedMeshes.pearSmall.setMatrixAt( 1, pearSmallDummy2.matrix );

			// marquise 3

			pearSmallDummy3.position.set( -0.079, 0.112, 0.077 );
			pearSmallDummy3.rotation.y = -0.15;
			pearSmallDummy3.rotation.x = -0.27;
			pearSmallDummy3.rotation.z = -0.15;
			pearSmallDummy3.updateMatrix();

			instancedMeshes.pearSmall.setMatrixAt( 2, pearSmallDummy3.matrix );

			//

			instancedMeshes.pearSmall.instanceMatrix.needsUpdate = true;

		}

		// camera

		targetRot.y = 2 * -InputPosition.x;
		targetRot.x = 2 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		renderer.render( scene, camera );

	};

	return { animate }

}