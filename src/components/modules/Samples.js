
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

createSamplesBox(
	'Photorealistic Rendering',
	'https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/render-teaser.jpg',
	'https://cad-portfolio.s3.eu-west-3.amazonaws.com/samples/felix_mariotto_renders.zip'
);

createSamplesBox(
	'CAD 3D Models',
	'https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/cad-teaser.jpg',
	'https://cad-portfolio.s3.eu-west-3.amazonaws.com/samples/felix_mariotto_cad.zip'
);

// createSamplesBox( 'Documentation', 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/viewer2.jpg' );

//

function createSamplesBox( title, imgUrl, dlUrl ) {

	const sampleContainer = document.createElement('A');
	sampleContainer.classList.add('sample-container');
	sampleContainer.href = dlUrl;

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