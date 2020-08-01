
import './index.css';

import MenuButton from './components/menuButton/MenuButton.js';
import { updateButtonTo } from './components/menuButton/MenuButton.js';

import Menu from './components/menu/Menu.js';
import { openMenu } from './components/menu/Menu.js';
import { closeMenu } from './components/menu/Menu.js';

import { linkEventEmitter } from './components/link/Link.js';

//

let currentLocation = 'home';

//

const container = document.createElement('DIV');
container.id = 'page-container';

document.body.append( container );

//

container.append( Menu );
document.body.append( MenuButton );


//

MenuButton.addEventListener( 'click', () => {

	switch ( currentLocation ) {

	case 'home' :
		openMenu();
		updateButtonTo( 'close' );
		currentLocation = 'menu';
		break

	case 'menu' :
		closeMenu();
		updateButtonTo( 'menu' );
		currentLocation = 'home';
		break

	case 'module' :
		console.log('coucou');
		break

	}

})

//

linkEventEmitter.addEventListener( 'clicklink', ( message ) => {

	switch ( message.detail.moduleName ) {

	case 'expertise' :
		console.log('expertise');
		break

	case 'prototypes' :
		console.log('prototypes');
		break

	case 'casting parts' :
		console.log('casting parts');
		break

	case 'technical doc' :
		console.log('technical doc');
		break

	case 'contact' :
		console.log('contact');
		break

	}

});
