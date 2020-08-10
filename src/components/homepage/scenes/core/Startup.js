
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

//

export default function Startup( domElement ) {

	const HEIGHT = domElement.clientHeight;
	const WIDTH = domElement.clientWidth;

	const scene = new Scene();

	const camera = new PerspectiveCamera(
		60,
		WIDTH / HEIGHT,
		0.05,
		3
	);

	const renderer = new WebGLRenderer({
		antialias: true,
		alpha: true,
		precision: 'mediump'
	});
	renderer.shadowMap.enabled = true ;

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