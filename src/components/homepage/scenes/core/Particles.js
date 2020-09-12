
import * as THREE from 'three';
import Easing from './Easing.js';
import particlePNG from '../assets/particle.png';

//

export default function Particles() {

	const container = new THREE.Group();

	//

	const FRONT_PARTICLES_GROUPS = 3;
	const BACK_PARTICLES_GROUPS = 2;

	const particlesGroups = [];

	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load( particlePNG );

	// background

	for ( let i=0 ; i<BACK_PARTICLES_GROUPS ; i++ ) {

		const material = new THREE.PointsMaterial({
			size: 0.5 + ( 0.5 * Math.pow( i, 1.7 ) ),
			map: texture,
			depthTest: false,
			transparent: true,
			opacity: 0.5
		});

		const geometry = new THREE.BufferGeometry();
		const vertices = [];

		for ( var j = 0; j < 12 * Math.pow( BACK_PARTICLES_GROUPS - i, 2 ); j ++ ) {

			vertices.push(
				Math.random() * 4 - 2,
				Math.random() * 4 - 2,
				Math.random() * -0.65
			);

		}

		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

		const particles = new THREE.Points( geometry, material );

		particles.position.z -= 0.3;

		container.add( particles );

	}

	// foreground

	for ( let i=0 ; i<FRONT_PARTICLES_GROUPS ; i++ ) {

		const material = new THREE.PointsMaterial({
			size: 0.04 + ( 0.02 * Math.pow( i, 2 ) ),
			map: texture,
			depthTest: false,
			transparent: true,
			opacity: 0.2
		});

		const geometry = new THREE.BufferGeometry();
		const vertices = [];

		for ( var j = 0; j < 35 * Math.pow( FRONT_PARTICLES_GROUPS - i, 2 ); j ++ ) {

			vertices.push(
				Math.random() * 2.5 - 1.25,
				Math.random() * 1.5 - 0.75,
				Math.random() * 0.55
			);

		}

		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

		const newGroup = {
			speed: (Math.random() * 0.0002) + 0.0002,
			child1: new THREE.Points( geometry, material ),
			child2: new THREE.Points( geometry, material ),
			update: function update( speedRatio ) {

				[ this.child1, this.child2 ].forEach( (child) => {

					child.position.y += this.speed * speedRatio;

					if ( child.position.y > 1.5 ) child.position.y = -1.5;

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

	function update( speedRatio ) {

		particlesGroups.forEach( (particlesGroup) => {

			particlesGroup.update( speedRatio );

		})

	}

	//

	return {
		container,
		update
	}

}
