
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

//

MenuButton.addEventListener( 'click', () => {

	switch ( currentLocation ) {

	case 'home' :
		openMenu();
		updateButtonTo( 'close' );
		udpateLocation( 'menu' );
		break

	case 'menu' :
		closeMenu();
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

window.addEventListener( 'scroll', (e) => {

	const currentScroll = document.documentElement.scrollTop;

	const sceneHeight = window.innerHeight * 1.2;

	currentPage = Math.floor( (currentScroll + ( sceneHeight * 0.6 )) / sceneHeight );

});

//

setInterval( () => {

	const sceneHeight = window.innerHeight * 1.2;

	const targetScroll = ( sceneHeight * currentPage );

	// return if scroll is already right
	if ( Math.round( targetScroll ) === document.documentElement.scrollTop ) return

	// get eased value to add
	let toAdd = ( targetScroll - document.documentElement.scrollTop ) * 0.05;

	// clamp value so the move is never clunky
	toAdd = Math.max( -8, Math.min( toAdd, 8 ) );

	if ( Math.abs( toAdd ) > 0.3 ) {

		if ( Math.abs( toAdd ) < 1 ) toAdd = Math.sign( toAdd )

		document.documentElement.scrollTop += toAdd;

	} else {

		document.documentElement.scrollTop = Math.round( targetScroll );

	}

}, 16 );