
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

createSamplesBox( 'Photorealistic Rendering' );

createSamplesBox( 'CAD 3D Models' );

createSamplesBox( 'Documentation' );

//

function createSamplesBox( title ) {

	const sampleContainer = document.createElement('DIV');
	sampleContainer.classList.add('sample-container');

	const img = document.createElement('IMG');
	img.src = 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/viewer2.jpg';

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-download');

	const text = document.createElement('DIV');
	text.innerHTML = title;

	sampleContainer.append( icon, img, text );
	samplesContainer.append( sampleContainer );

};

//

export default container