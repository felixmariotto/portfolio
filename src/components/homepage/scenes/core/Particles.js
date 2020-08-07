
import * as THREE from 'three';
import Easing from './Easing.js';

//

export default function Particles() {

	const container = new THREE.Group();

	//

	var children = [];
	var vertices = [];
	var materials = [];

	var textureLoader = new THREE.TextureLoader();

	var spriteTexture = generatePointTexture();

	
	//

	for ( let i=0 ; i<5 ; i++ ) {

		materials[ i ] = new THREE.PointsMaterial({
			size: 0.02,
			map: spriteTexture,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			transparent: true
		});

		var geometry = new THREE.BufferGeometry();

		for ( var j = 0; j < 50; j ++ ) {

			var x = Math.random() * 2 - 1;
			var y = Math.random() * 1 - 0.5;
			var z = Math.random() * 0.4 + 0.2;

			vertices.push( x, y, z );

		}

		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );


		children = new THREE.Points( geometry, materials[ i ] );

		container.add( children );

	}

	//

	function update() {

		children.position.y += 0.0005;

	}

	//

	return {
		container,
		update
	}

}

//

const spriteMaterial = new THREE.SpriteMaterial({
	map: new THREE.CanvasTexture( generatePointTexture() ),
	sizeAttenuation: false,
	depthTest: false,
	transparent: true,
	opacity: 0.5
})

function PointSprite() {

	const sprite = new THREE.Sprite( spriteMaterial );
	
	return sprite

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