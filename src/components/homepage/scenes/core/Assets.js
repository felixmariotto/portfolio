
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

//

const loader = new GLTFLoader();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( './draco/' );
loader.setDRACOLoader( dracoLoader );

//

const bezel = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/bezel-processed.glb' );

const expertise = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/expertise-processed.glb' );

const prototypes = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/prototypes-processed.glb' );

const ring1 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring1-processed.glb' );

const ring2 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring2-processed.glb' );

const head1 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head1-processed.glb' );

const head2 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head2-processed.glb' );

const models = {
	bezel,
	expertise,
	prototypes,
	ring1,
	ring2,
	head1,
	head2
};

//

function loadItem( url ) {

	return new Promise( (resolve) => {

		loader.load( url, (glb) => {

			resolve( glb.scene );

		});

	})

};

//

export { ring1 }
export { ring2 }
export { head1 }
export { head2 }
export { bezel }
export { expertise }
export { prototypes }
export default models
