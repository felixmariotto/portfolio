
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import Easing from './core/Easing.js';
import Particles from './core/Particles.js';
import { ring1, ring2, head1, head2 } from './core/Assets.js';
import { marquiseBig, marquiseMedium, marquiseSmall, pearBig, pearMedium, pearSmall } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Casting( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	scene.fog = new THREE.FogExp2( 0xffffff, 0.9 )

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

	const ringContainer = new THREE.Group();

	scene.add( ringContainer );

	// material

	const EXTENSION = 'jpg';

	const envMap = new THREE.CubeTextureLoader()
					.setPath( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/' )
					.load( [ `px.${ EXTENSION }`, `nx.${ EXTENSION }`, `py.${ EXTENSION }`, `ny.${ EXTENSION }`, `pz.${ EXTENSION }`, `nz.${ EXTENSION }` ] );

	const roughnessMap = new THREE.TextureLoader().load( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/metal_roughness.jpg' )

	const material = new THREE.MeshStandardMaterial({
		envMap,
		roughnessMap,
		metalness: 1,
		transparent: true
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

	const dummy = new THREE.Object3D();

	//

	marquiseBig.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ 0.045, 0.10, 0.005 ],
					rot : [ 0, Math.PI / 2.3, 0 ]
				},
				{
					pos : [ 0.032, 0.10, -0.03 ],
					rot : [ 0, 0.1, 0 ]
				},
				{
					pos : [ 0.065, 0.10, -0.0135 ],
					rot : [ 0, Math.PI / 1.75, 0 ]
				}
			]
			);
	});

	marquiseMedium.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ 0.051, 0.104, -0.041 ],
					rot : [ 0.1, 0, 0.1 ]
				},
				{
					pos : [ 0.082, 0.104, -0.032 ],
					rot : [ 0.5, Math.PI / 1.75, -0.5 ]
				}
			]
			);
	});

	marquiseSmall.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ 0.069, 0.109, -0.057 ],
					rot : [ 0.35, 0, 0.2 ]
				},
				{
					pos : [ 0.083, 0.117, -0.069 ],
					rot : [ 0.4, -0.15, 0.2 ]
				},
				{
					pos : [ 0.096, 0.112, -0.052 ],
					rot : [ 1.0, Math.PI / 1.5, -0.8 ]
				}
			]
			);
	});

	//

	pearBig.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ -0.047, 0.10, -0.006 ],
					rot : [ 0, -Math.PI / 1.6, 0 ]
				},
				{
					pos : [ -0.065, 0.101, 0.014 ],
					rot : [ 0, -Math.PI / 1.9, 0.12 ]
				},
			]
			);
	});

	pearMedium.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ -0.029, 0.101, 0.028 ],
					rot : [ 0, 0.2, 0 ]
				},
				{
					pos : [ -0.048, 0.103, 0.042 ],
					rot : [ -0.12, 0.2, -0.1 ]
				},
				{
					pos : [ -0.08, 0.105, 0.036 ],
					rot : [ -0.5, -Math.PI / 2.4, -0.3 ]
				}
			]
			);
	});

	pearSmall.then( ( loadedObj ) => {
		initInstancedMesh(
			loadedObj,
			[
				{
					pos : [ -0.063, 0.107, 0.058 ],
					rot : [ -0.2, 0.15, -0.15 ]
				},
				{
					pos : [ -0.089, 0.109, 0.056 ],
					rot : [ -0.7, -Math.PI / 2.5, -0.5 ]
				},
				{
					pos : [ -0.079, 0.112, 0.077 ],
					rot : [ -0.27, -0.15, -0.15 ]
				}
			]
			);
	});

	//

	function initObj( obj, group ) {

		obj.scale.setScalar( 0.01 );

		obj.traverse( (child) => {

			if ( child.isMesh ) child.material = material;

		});

		group.add( obj );
		ringContainer.add( group );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	}

	function initInstancedMesh( obj, transforms ) {

		if ( !transforms.forEach ) return

		obj.children[ 0 ].geometry.scale( 0.01, 0.01, 0.01 );
		obj.children[ 0 ].geometry.rotateX( Math.PI / 2 );

		const mesh = new THREE.InstancedMesh(
			obj.children[ 0 ].geometry,
			instanceMaterial,
			transforms.length
		);

		mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

		ringContainer.add( mesh );

		// set each instance transform

		transforms.forEach( (t, i) => {

			dummy.position.set( t.pos[0], t.pos[1], t.pos[2] );
			dummy.rotation.set( t.rot[0], t.rot[1], t.rot[2] );
			dummy.updateMatrix();

			mesh.setMatrixAt( i, dummy.matrix );

		});

		mesh.instanceMatrix.needsUpdate = true;

	}

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.set( 0.3, 0.3, 0.4 );
	camera.lookAt( 0, 0, 0 );


	const particlesGroup = new THREE.Group();
	scene.add( particlesGroup );
	const particles = Particles();
	particles.container.renderOrder = -1;
	particles.container.scale.setScalar( 0.65 );
	particles.container.rotation.y += Math.PI / 5;
	particlesGroup.add( particles.container );

	//

	const targetRot = new THREE.Vector2();
	let time = 0;

	function animate( speedRatio ) {

		// assets group

		ringContainer.rotation.y += 0.005;

		// camera

		targetRot.y = 2 * -InputPosition.x;
		targetRot.x = 0.4 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02 * speedRatio;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02 * speedRatio;

		particlesGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.0185 * speedRatio;
		particlesGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.0185 * speedRatio;

		renderer.render( scene, camera );

		particles.update( speedRatio );

	};

	Promise.all([ ring1, ring2, head1, head2 ]).then( () => {
		animate( 1 );
	})

	return { animate }

}