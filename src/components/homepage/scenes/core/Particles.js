
import * as THREE from 'three';
import Easing from './Easing.js';

//

export default function Particles() {

	const container = new THREE.Group();

	//

	const particlesGroups = [];
	const vertices = [];
	const materials = [];

	const textureLoader = new THREE.TextureLoader();
	const spriteTexture = generatePointTexture();

	//

	for ( let i=0 ; i<5 ; i++ ) {

		materials[ i ] = new THREE.PointsMaterial({
			size: 0.02,
			map: spriteTexture,
			depthTest: false,
			transparent: true,
			opacity: 0.3
		});

		const geometry = new THREE.BufferGeometry();

		for ( var j = 0; j < 30; j ++ ) {

			vertices.push(
				Math.random() * 2.5 - 1.25,
				Math.random() * 1 - 0.5,
				Math.random() * 0.4 + 0.2
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

//

function generatePointTexture() {

	var canvas = document.createElement( 'canvas' );
	canvas.width = 64;
	canvas.height = 64;

	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(32, 32, 29, 0, 2 * Math.PI);
	ctx.lineWidth = 5;
	ctx.fillStyle = "white";
	ctx.fill();

	return new THREE.CanvasTexture( canvas );

};