
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

//

const loader = new GLTFLoader();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( './draco/' );
loader.setDRACOLoader( dracoLoader );

//

const bezel = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/bezel-processed.glb', true );

const expertise = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/expertise-processed.glb' );

const prototypes = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/prototypes-processed.glb' );

const ring1 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring1-processed.glb' );

const ring2 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring2-processed.glb' );

const head1 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head1-processed.glb' );

const head2 = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head2-processed.glb' );

const marquiseBig = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseBig-processed.glb' );

const marquiseMedium = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseMedium-processed.glb' );

const marquiseSmall = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseSmall-processed.glb' );

const pearBig = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearBig-processed.glb' );

const pearMedium = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearMedium-processed.glb' );

const pearSmall = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearSmall-processed.glb' );

const workbenchMisc = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/workbench-misc-processed.glb' );

const workbenchBoard = loadItem( 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/workbench-board-processed.glb' );

const models = {
	bezel,
	expertise,
	prototypes,
	ring1,
	ring2,
	head1,
	head2,
	marquiseBig,
	marquiseMedium,
	marquiseSmall,
	pearBig,
	pearMedium,
	pearSmall,
	workbenchMisc,
	workbenchBoard
};

//

function loadItem( url, priority ) {

	const promise = new Promise( (resolve) => {

		if ( priority ) {

			loader.load( url, (glb) => {

				resolve( glb.scene );

			});

		} else {

			setTimeout( () => {

				loader.load( url, (glb) => {

					resolve( glb.scene );

				});

			}, 1000 );
			
		}

	})

	return promise

};

//

export { ring1 }
export { ring2 }
export { head1 }
export { head2 }
export { bezel }
export { marquiseBig }
export { marquiseMedium }
export { marquiseSmall }
export { pearBig }
export { pearMedium }
export { pearSmall }
export { expertise }
export { prototypes }
export { workbenchMisc }
export { workbenchBoard }
export default models
