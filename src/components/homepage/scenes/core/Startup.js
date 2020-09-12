
import * as THREE from 'three';

//

export default function Startup( domElement ) {

	const HEIGHT = domElement.clientHeight;
	const WIDTH = domElement.clientWidth;

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(
		60,
		WIDTH / HEIGHT,
		0.05,
		5
	);

	const renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	});
	renderer.shadowMap.enabled = true ;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.gammaFactor = 2.2;

	renderer.setSize(
		WIDTH,
		HEIGHT
	);

	renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );

	domElement.append( renderer.domElement );

	setTimeout( () => {
		onWindowResize()
	}, 0 );

	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize() {

		const HEIGHT = domElement.clientHeight;
		const WIDTH = domElement.clientWidth;

		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();

		renderer.setSize( WIDTH, HEIGHT );

	}

	return { scene, camera, renderer }

}