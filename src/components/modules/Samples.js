
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

const updateFns = [];

createSamplesBox( 'Photorealistic Rendering' );

createSamplesBox( 'CAD 3D Models' );

createSamplesBox( 'Documentation' );

container.onscroll = () => updateFns.forEach( fn => fn() );

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

	updateIconVisibility();

	function updateIconVisibility() {

		const contRect = container.getBoundingClientRect();

		const rect = sampleContainer.getBoundingClientRect();

		if ( 
			contRect.bottom < rect.top + ( ( rect.bottom - rect.top ) * 0.7 ) ||
			contRect.top > rect.bottom - ( ( rect.bottom - rect.top ) * 0.7 )
		) {

			icon.classList.add('hidden')

		} else {

			icon.classList.remove('hidden')

		};

	};

	updateFns.push( updateIconVisibility );

};

//

export default container