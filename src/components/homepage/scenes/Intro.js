
import Startup from './core/Startup.js';
import ShadowedLight from './core/ShadowedLight.js';
import InputPosition from './core/InputPosition.js';

import * as THREE from 'three';

//

export default function Intro( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2);
	const material = new THREE.MeshLambertMaterial();

	scene.add( ShadowedLight({ color: 0xffa1c2 }), new THREE.AmbientLight( 0x404040, 2 ) );

	const meshes = [];

	for ( let i = 0 ; i < 15 ; i++ ) {

		const cube = new THREE.Mesh( geometry, material );

		cube.position.x = (i - 5) * -0.25;
		cube.position.y = (( i - 5 / 10 ) * -0.1) + 0.5 ;

		cube.rotation.x = Math.random() * Math.PI;
		cube.rotation.y = Math.random() * Math.PI;

		meshes.push( cube );

		scene.add( cube );

	}

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );

	camera.position.z = 1;
	camera.lookAt( 0, 0, 0 );
	cameraGroup.add( camera );

	//

	const targetRot = new THREE.Vector2();

	function animate() {

		meshes.forEach( (mesh, i) => {

			const basePos = (( i - 5 / 10 ) * -0.1) + 0.5;

			mesh.position.y = basePos + ( ( Math.sin( (Date.now() + ( 300 * i ) ) / 1000 ) ) * 0.05 )

		})

		targetRot.y = 0.25 * -InputPosition.x;
		targetRot.x = 0.1 * -InputPosition.y;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.02;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.02;

		camera.lookAt( 0, 0, 0 );

		renderer.render( scene, camera );

	};

	return { animate }

}