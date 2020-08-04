
import './index.css';

import MenuButton from './components/menuButton/MenuButton.js';
import { updateButtonTo } from './components/menuButton/MenuButton.js';

import Menu from './components/menu/Menu.js';
import { openMenu } from './components/menu/Menu.js';
import { closeMenu } from './components/menu/Menu.js';

import { linkEventEmitter } from './components/link/Link.js';

import ModuleContainer from './components/modules/ModuleContainer.js';
import { setModule } from './components/modules/ModuleContainer.js';

import Homepage from './components/homepage/Homepage.js';
import { blurHomepage } from './components/homepage/Homepage.js';
import { focusHomepage } from './components/homepage/Homepage.js';

//

let currentPage = 0;
let savedScroll = 0;

let previousLocation = 'home';
let currentLocation = 'home';

function udpateLocation( newLocation ) {
	previousLocation = currentLocation;
	currentLocation = newLocation;
};

//

const container = document.createElement('DIV');
container.id = 'page-container';

document.body.append( container );

//

container.append( Menu, ModuleContainer, Homepage );
document.body.append( MenuButton );

// logo

const logoContainer = document.createElement('DIV');
logoContainer.id = 'logo-container';

document.body.append( logoContainer );

const logo = document.createElement('IMG');
logo.id = 'logo';
logo.src = 'https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/logo-portfolio.png';

logoContainer.append( logo );

// menu button

MenuButton.addEventListener( 'click', () => {

	switch ( currentLocation ) {

	case 'home' :
		openMenu();
		blurHomepage();
		updateButtonTo( 'close' );
		udpateLocation( 'menu' );
		break

	case 'menu' :
		closeMenu();
		focusHomepage();
		updateButtonTo( 'menu' );
		udpateLocation( 'home' );
		break

	case 'module' :
		exitModuleMode();
		currentLocation = previousLocation;
		if ( currentLocation === 'home' ) updateButtonTo( 'menu' );
		else if ( currentLocation === 'menu' ) updateButtonTo( 'close' );
		break

	}

})

//

function enterModuleMode() {
	savedScroll = document.documentElement.scrollTop;
	container.classList.add('module-mode');
	setTimeout( () => {
		if ( container.classList.contains('module-mode') ) {
			container.classList.add('hide-overflow');
		}
	}, 300 );
}

function exitModuleMode() {
	container.classList.remove('module-mode');
	container.classList.remove('hide-overflow');
	document.documentElement.scrollTop = savedScroll;
}

//

linkEventEmitter.addEventListener( 'clicklink', ( message ) => {

	udpateLocation( 'module' );
	updateButtonTo( 'back' );

	//

	enterModuleMode();

	//

	setModule( message.detail.moduleName );

});

let scrollTime = 0;

window.addEventListener( 'scroll', (e) => {

	scrollTime = Date.now();

	const currentScroll = window.scrollY;

	const sceneHeight = document.body.clientHeight * 1.4;

	currentPage = Math.floor( (currentScroll + ( sceneHeight * 0.5 )) / sceneHeight );

});

//

setInterval( () => {

	if ( scrollTime > Date.now() - 800 ) return

	const sceneHeight = document.body.clientHeight * 1.4;

	const targetScroll = ( sceneHeight * currentPage );

	// return if scroll is already right
	if ( Math.round( targetScroll ) === window.scrollY ) return

	window.scrollTo({
		top: targetScroll,
		behavior: 'smooth'
	});

}, 100 );
