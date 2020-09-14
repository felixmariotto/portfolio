
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';
import Particles from './core/Particles.js';
import { bezel } from './core/Assets.js';

import * as THREE from 'three';

//

export default function Intro( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	// screen aspect ratio, used for camera position and particles speed
	let ratio = 1;

	const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2);

	const light = ShadowedLight({
		color: 0xffd1e1,
		z: 10,
		x: -2,
		y: 1,
		intensity: 0.8
	});

	scene.add( light, new THREE.AmbientLight( 0xc0f8fc, 0.25 ) );

	const particles = Particles();

	scene.add( particles.container );

	// bezels

	const BEZEL_COUNT = 9;
	const BEZEL_MAX_ANGLE = 0.07;
	const bezelMeshes = [];

	const dummyObj = new THREE.Object3D();

	const backMat = new THREE.MeshLambertMaterial({
		transparent: true,
		opacity: 0.8,
		side: THREE.BackSide,
		color: 0xffffff
	});

	const frontMat = new THREE.MeshLambertMaterial({
		transparent: true,
		opacity: 0.7,
		side: THREE.FrontSide,
		color: 0xffffff
	});

	bezel.then( (obj) => {

		obj.children[ 0 ].geometry.computeVertexNormals();

		bezelMeshes[ 0 ] = new THREE.InstancedMesh(
			obj.children[ 0 ].geometry,
			backMat,
			BEZEL_COUNT
		);

		bezelMeshes[ 1 ] = new THREE.InstancedMesh(
			obj.children[ 0 ].geometry,
			frontMat,
			BEZEL_COUNT
		);

		bezelMeshes.forEach( (mesh, i) => {

			mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

			mesh.renderOrder = i;

			mesh.position.x -= 1.55;
			mesh.rotation.x += Math.PI / 1.3;
			mesh.scale.setScalar( 0.7 );

			const container = new THREE.Group();
			container.rotation.z += 0.3;
			container.add( mesh );

			scene.add( container );

		})

	});

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	camera.position.z = 1;
	
	positionCamera();

	window.addEventListener( 'resize', positionCamera );

	function positionCamera() {

		ratio = window.innerHeight / window.innerWidth;

		if ( ratio > 1 ) {

			camera.position.z = ratio;

		} else {

			camera.position.z = 1;

		}

		camera.lookAt( 0, 0, 0 );

	}

	//

	const targetRot = new THREE.Vector2();
	let time = 0;

	function animate( speedRatio ) {

		time += speedRatio * ( 1 / 30 );

		if ( bezelMeshes ) {

			// translate mesh up and down

			bezelMeshes.forEach( (mesh) => {

				mesh.position.y = Math.sin( time ) * 0.01;

			})

			// rotate bezels

			const targetPosition = new THREE.Vector3();

			const rotAxis = new THREE.Vector3( 0, 1, 0 );

			for ( let i = 0 ; i < BEZEL_COUNT ; i ++ ) {

				const angle = Math.sin( time + (i * 1.1) ) * BEZEL_MAX_ANGLE;

				dummyObj.position.copy( targetPosition );
				dummyObj.rotation.y = angle;

				dummyObj.updateMatrix();

				bezelMeshes.forEach( (mesh) => {
					mesh.setMatrixAt( i, dummyObj.matrix );
				})

				//

				const additionVec = new THREE.Vector3( 0.558, 0, 0 );
				additionVec.applyAxisAngle( rotAxis, angle );

				targetPosition.add( additionVec );

			}

			bezelMeshes.forEach( (mesh) => {
				mesh.instanceMatrix.needsUpdate = true;
			});

		}

		//

		targetRot.y = 0.25 * -InputPosition.x;
		targetRot.x = 0.15 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02 * speedRatio;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02 * speedRatio;

		camera.lookAt( 0, 0, 0 );

		particles.update( speedRatio * ratio );

		renderer.render( scene, camera );

	};

	return { animate }

}