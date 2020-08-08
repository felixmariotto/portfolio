
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

const models = {
	bezel
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

export { bezel }
export default models
