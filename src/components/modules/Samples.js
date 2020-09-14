
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Samples';

container.append( title );

// samples flex box

const samplesContainer = document.createElement('DIV');
samplesContainer.id = "samples-container";

container.append( samplesContainer );

//

createSamplesBox( 'Photorealistic Rendering', 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/render-teaser.jpg' );

createSamplesBox( 'CAD 3D Models', 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/cad-teaser.jpg' );

// createSamplesBox( 'Documentation', 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/viewer2.jpg' );

//

function createSamplesBox( title, imgUrl ) {

	const sampleContainer = document.createElement('DIV');
	sampleContainer.classList.add('sample-container');

	const img = document.createElement('IMG');
	img.src = imgUrl;

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-download');

	const text = document.createElement('DIV');
	text.innerHTML = title;

	sampleContainer.append( icon, img, text );
	samplesContainer.append( sampleContainer );

};

//

export default container