
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

	const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2);
	const material = new THREE.MeshLambertMaterial({ transparent: true });

	scene.add( ShadowedLight({ color: 0xffa1c2 }), new THREE.AmbientLight( 0x404040, 2 ) );

	const particles = Particles();

	scene.add( particles.container );

	// bezels

	const BEZEL_COUNT = 10;
	const BEZEL_MAX_ANGLE = 0.05;
	let bezelMesh;

	const dummyObj = new THREE.Object3D();

	const bezelMat = new THREE.MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: 0xffffff
	});

	bezel.then( (obj) => {

		obj.children[ 0 ].geometry.computeVertexNormals();

		bezelMesh = new THREE.InstancedMesh(
			obj.children[ 0 ].geometry,
			bezelMat,
			BEZEL_COUNT
		);

		bezelMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

		bezelMesh.position.x -= 1.5;
		bezelMesh.rotation.x += Math.PI / 1.3;
		bezelMesh.scale.setScalar( 0.7 );

		const container = new THREE.Group();
		container.rotation.z += 0.3;
		container.add( bezelMesh );

		scene.add( container );

	});

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );

	camera.position.z = 1;
	camera.lookAt( 0, 0, 0 );
	cameraGroup.add( camera );

	//

	const targetRot = new THREE.Vector2();

	function animate() {

		if ( bezelMesh ) {

			const time = Date.now() * 0.001;

			const targetPosition = new THREE.Vector3();

			const rotAxis = new THREE.Vector3( 0, 1, 0 );

			for ( let i = 0 ; i < BEZEL_COUNT ; i ++ ) {

				const angle = Math.sin( ( Date.now() / 1200 ) + i ) * BEZEL_MAX_ANGLE;

				dummyObj.position.copy( targetPosition );
				dummyObj.rotation.y = angle;
				dummyObj.rotation.z = 0;

				dummyObj.updateMatrix();

				bezelMesh.setMatrixAt( i, dummyObj.matrix );

				//

				const additionVec = new THREE.Vector3( 0.558, 0, 0 );
				additionVec.applyAxisAngle( rotAxis, angle );

				targetPosition.add( additionVec );

			}

			bezelMesh.instanceMatrix.needsUpdate = true;

		}

		//

		targetRot.y = 0.25 * -InputPosition.x;
		targetRot.x = 0.1 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		camera.lookAt( 0, 0, 0 );

		particles.update();

		renderer.render( scene, camera );

	};

	return { animate }

}