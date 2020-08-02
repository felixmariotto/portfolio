
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

//

export default function Startup() {

	const scene = new Scene();

	const camera = new PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.05,
		2
	);

	const renderer = new WebGLRenderer({
		antialias: true,
		alpha: true
	});

	renderer.setSize(
		window.innerWidth,
		window.innerHeight
	);

	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	return { scene, camera, renderer }

}