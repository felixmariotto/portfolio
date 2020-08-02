
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
		container.classList.remove('module-mode');
		currentLocation = previousLocation;
		if ( currentLocation === 'home' ) updateButtonTo( 'menu' );
		else if ( currentLocation === 'menu' ) updateButtonTo( 'close' );
		break

	}

})

//

linkEventEmitter.addEventListener( 'clicklink', ( message ) => {

	udpateLocation( 'module' );
	updateButtonTo( 'back' );

	//

	container.classList.add('module-mode');

	//

	setModule( message.detail.moduleName );

});
