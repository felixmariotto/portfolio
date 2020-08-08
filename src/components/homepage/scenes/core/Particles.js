
import * as THREE from 'three';
import Easing from './Easing.js';
import particlePNG from '../assets/particle.png';

//

export default function Particles() {

	const container = new THREE.Group();

	//

	const PARTICLES_GROUPS = 5;

	const particlesGroups = [];
	const materials = [];

	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load( particlePNG );

	//

	for ( let i=0 ; i<PARTICLES_GROUPS ; i++ ) {

		materials[ i ] = new THREE.PointsMaterial({
			size: 0.02 + ( 0.02 * Math.pow( i, 1.7 ) ),
			map: texture,
			depthTest: false,
			transparent: true,
			opacity: 0.25
		});

		const geometry = new THREE.BufferGeometry();
		const vertices = [];

		for ( var j = 0; j < 10 * Math.pow( PARTICLES_GROUPS - i, 2 ); j ++ ) {

			vertices.push(
				Math.random() * 2.5 - 1.25,
				Math.random() * 1 - 0.5,
				Math.random() * 0.65
			);

		}

		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

		const newGroup = {
			speed: (Math.random() * 0.0002) + 0.0002,
			child1: new THREE.Points( geometry, materials[ i ] ),
			child2: new THREE.Points( geometry, materials[ i ] ),
			update: function update() {

				[ this.child1, this.child2 ].forEach( (child) => {

					child.position.y += this.speed;

					if ( child.position.y > 1 ) child.position.y = -1;

				})

			}
		}

		newGroup.child1.geometry.translate(
			(Math.random() - 0.5) * 0.1,
			(Math.random() - 0.5) * 0.1,
			0
		);
		newGroup.child2.position.y -= 1;

		newGroup.child1.position.z = 0.3;
		newGroup.child2.position.z = 0.3;

		particlesGroups.push( newGroup );

		container.add( newGroup.child1, newGroup.child2 );

	}

	//

	function update() {

		particlesGroups.forEach( (particlesGroup) => {

			particlesGroup.update();

		})

	}

	//

	return {
		container,
		update
	}

}
