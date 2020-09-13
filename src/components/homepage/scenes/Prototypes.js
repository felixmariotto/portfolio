
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';
import Easing from './core/Easing.js';
import { prototypes } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Prototypes( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #022559 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	renderer.localClippingEnabled = true;
	renderer.domElement.style.opacity = "0.8";

	scene.background = new THREE.Color( 0xffedf3 );
	scene.fog = new THREE.Fog( 0xffedf3, 0.25, 1 );

	const clock = new THREE.Clock();

	// plane

	var planeGeometry = new THREE.PlaneBufferGeometry( 8, 8 );
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

	// screen

	const IMAGE_WIDTH = 0.23;

	const imagesGroup = new THREE.Group();
	imagesGroup.position.set( 0.005, 0.07, -0.065 );
	imagesGroup.rotation.x = -0.57;
	scene.add( imagesGroup );

	const textureLoader = new THREE.TextureLoader();

	const EXTENSION = 'jpg';

	const envMap = new THREE.CubeTextureLoader()
					.setPath( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/' )
					.load( [ `px.${ EXTENSION }`, `nx.${ EXTENSION }`, `py.${ EXTENSION }`, `ny.${ EXTENSION }`, `pz.${ EXTENSION }`, `nz.${ EXTENSION }` ] );

	const glassGeometry = new THREE.PlaneBufferGeometry( 0.24, 0.17 );
	const glass = new THREE.Mesh( glassGeometry, new THREE.MeshLambertMaterial({
		reflectivity: 1,
		transparent: true,
		opacity: 0.3,
		envMap
	}));
	glass.position.set( 0.005, 0.07, -0.0635 );
	glass.rotation.x = -0.57;
	glass.receiveShadow = true;
	scene.add( glass );

	const planeTop = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), 0.14 );
	const planeBottom = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -0.01 );
	const planeRight = new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), 0.12 );
	const planeLeft = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0.12 );

	const planes = [ planeTop, planeBottom, planeRight, planeLeft ];

	const images = [];

	for ( let i=0 ; i<3 ; i++ ) {

		let planeGeometry = new THREE.PlaneBufferGeometry( IMAGE_WIDTH, IMAGE_WIDTH );
		let plane = new THREE.Mesh( planeGeometry );
		plane.position.x = IMAGE_WIDTH * i;
		imagesGroup.add( plane );

		images.push( plane );

		textureLoader.load( `https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/viewer${ i }.jpg`, (texture) => {

			const material = new THREE.MeshLambertMaterial({
				map: texture,
				clippingPlanes: planes,
			});

			plane.material = material;

		});

	};

	// light

	const light = ShadowedLight({
		bias: -0.0001,
		color: 0xffffff,
		x: -1,
		y: 2,
		z: 0.5,
		intensity: 0.8,
		width: 0.5,
		near: 2,
		far: 4,
		resolution: 1024
	});

	light.shadow.radius = 3.5;

	scene.add( light );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.35 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	setTimeout( positionCamera, 0 );

	window.addEventListener( 'resize', positionCamera );

	function positionCamera() {

		let ratio = domElement.clientHeight / domElement.clientWidth;

		camera.position.set( 0.05, 0.2, 0.2 );
		
		if ( ratio && ratio > 1 ) {

			camera.position.multiplyScalar( ratio * 1.1 );

			camera.lookAt( 0.05, 0.08, ( 1 - ratio ) * -0.11 );

			const newCamLength = camera.position.length();

			scene.fog.near = newCamLength - 0.05 ;
			scene.fog.far = newCamLength + 0.3;

		} else {

			camera.lookAt( 0.05, 0.08, 0 );

			scene.fog.near = 0.25;
			scene.fog.far = 1;

		}

	};

	//

	const targetRot = new THREE.Vector2();
	let targetPos = 0;

	const SCREEN_SHIFT_DURATION = 3000;
	let screenShift = 0;

	function animate( speedRatio ) {

		const deltaMS = speedRatio * ( 1 / 60 ) * 1000;

		// TABLET SCREEN

		screenShift += ( screenShift + deltaMS ) / SCREEN_SHIFT_DURATION;

		if ( screenShift > 1 ) {

			screenShift = 0;

			images.push( images.shift() );

		};

		images.forEach( (plane, i) => {

			const t = Easing.easeInOutQuint( screenShift );

			plane.position.x = ( IMAGE_WIDTH * i ) - ( IMAGE_WIDTH * t );

		});

		// CAMERA

		targetRot.y = 0.3 * -InputPosition.x;

		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02 * speedRatio;

		//

		renderer.render( scene, camera );

	};

	prototypes.then( () => {
		animate( 1 );
	});

	return { animate }

}