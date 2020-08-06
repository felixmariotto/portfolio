
import * as THREE from 'three';
import Easing from './Easing.js';

//

export default function Particles() {

	const container = new THREE.Group();

	//

	const spritePositions = [];

	for ( let i=0 ; i<50 ; i++ ) {

		const vec = new THREE.Vector3();

		vec.initX = (Math.random() - 0.5) * 1.4;

		vec.set(
			vec.initX,
			(Math.random() - 0.5) * 0.8,
			0.3 + ( Math.random() * 0.5 )
		);

		vec.upSpeed = 0.0003 + ( Math.random() * 0.0005 );
		vec.t = Math.random() * Math.PI;

		spritePositions.push( vec );

	};

	//

	const sprites = [];

	for ( let i=0 ; i<50 ; i++ ) {

		const sprite = PointSprite();

		sprite.scale.setScalar( 0.015 + ( Math.random() * 0.015 ) );

		sprites.push( sprite );

		container.add( sprite );

	};

	//

	function update() {

		spritePositions.forEach( (spritePos, i) => {

			spritePos.y += spritePos.upSpeed;

			spritePos.t += 0.004;

			spritePos.x = spritePos.initX + ( Math.sin(spritePos.t) * 0.05 );

			if ( spritePos.y > 0.4 ) spritePos.y = -0.4;

		})

		//

		sprites.forEach( (sprite, i) => {

			sprite.position.copy( spritePositions[ i ] )

		})

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

	return canvas;

};