
import './homepage.css';

import Link from '../link/Link.js';

import Intro from './scenes/Intro.js';
import Expertise from './scenes/Expertise.js';
import Prototypes from './scenes/Prototypes.js';
import Casting from './scenes/Casting.js';
import Doc from './scenes/Doc.js';
import Contact from './scenes/Contact.js';

//

const container = document.createElement('DIV');
container.id = "homepage-container";

//

const scenesContainers = [];

for ( let i = 0 ; i < 6 ; i++ ) {

	const sceneContainer = document.createElement('DIV');
	sceneContainer.classList.add( 'scene-container' );
	
	//

	const fixedContainer = document.createElement('DIV');
	fixedContainer.classList.add( 'scene-fixed-container' );

	//

	scenesContainers.push( fixedContainer );
	sceneContainer.append( fixedContainer );
	container.append( sceneContainer );

};

// Create scenes and add them to dom elements

const intro = Intro( scenesContainers[ 0 ] );
const expertise = Expertise( scenesContainers[ 1 ] );
const prototypes = Prototypes( scenesContainers[ 2 ] );
const casting = Casting( scenesContainers[ 3 ] );
const doc = Doc( scenesContainers[ 4 ] );
const contact = Contact( scenesContainers[ 5 ] );

const scenes = [
	intro,
	expertise,
	prototypes,
	casting,
	doc,
	contact
];

// Textual UI

(function introUI() {

	const container = document.createElement('H1');
	container.id = 'intro-textual-ui';
	container.classList.add('textual-ui')
	container.innerHTML = 'High Jewellery Design';

	scenesContainers[ 0 ].append( container );

})();

(function expertiseUI() {

	const container = document.createElement('DIV');
	container.id = 'expertise-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 1 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = "Consult";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

	container.append( speech );

	// link

	const link = Link( 'expertise' );
	link.innerHTML = 'learn more...';

	container.append( link );

})();

(function prototypesUI() {

	const container = document.createElement('DIV');
	container.id = 'prototypes-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 2 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = "Prototypes & viewers";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

	container.append( speech );

	// link

	const link = Link( 'prototypes' );
	link.innerHTML = 'learn more...';

	container.append( link );

})();

(function castingUI() {

	const container = document.createElement('DIV');
	container.id = 'casting-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 3 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = "Casting parts";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

	container.append( speech );

	// link

	const link = Link( 'casting parts' );
	link.innerHTML = 'learn more';

	container.append( link );

})();

(function docUI() {

	const container = document.createElement('DIV');
	container.id = 'doc-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 4 ].append( container );

	// title

	const title = document.createElement('H2');
	title.innerHTML = "Technical sheets";

	container.append( title );

	// speech

	const speech = document.createElement('P');
	speech.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

	container.append( speech );

	// link

	const link = Link( 'technical doc' );
	link.innerHTML = 'learn more';

	container.append( link );

})();

(function contactUI() {

	const container = document.createElement('DIV');
	container.id = 'contact-textual-ui';
	container.classList.add('textual-ui', 'service-ui')

	scenesContainers[ 5 ].append( container );

	//

	const link = Link( 'contact' );
	link.innerHTML = 'contact';

	container.append( link );

})();

//

loop();

function loop() {

	requestAnimationFrame( loop );

	// decide which scenes must be animated

	const currentPos = document.documentElement.scrollTop / (document.body.clientHeight * 1.4);

	const toAnimate = new Set([ Math.floor( currentPos ), Math.ceil( currentPos ) ]);

	toAnimate.forEach( (id) => {

		if ( id > 5 ) return

		scenes[ id ].animate();

	});

}

//

function blurHomepage() {
	scenesContainers.forEach( (domElement) => {
		domElement.classList.add( 'blurry' );
	});
};

function focusHomepage() {
	scenesContainers.forEach( (domElement) => {
		domElement.classList.remove( 'blurry' );
	});
}

//

export { blurHomepage }
export { focusHomepage }
export default container
