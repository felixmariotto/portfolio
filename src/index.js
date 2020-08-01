
import './index.css';

import MenuButton from './components/menuButton/MenuButton.js';
import { updateButtonTo } from './components/menuButton/MenuButton.js';

import Menu from './components/menu/Menu.js';
import { openMenu } from './components/menu/Menu.js';
import { closeMenu } from './components/menu/Menu.js';

//

let currentLocation = 'home';

//

const container = document.createElement('DIV');
container.id = 'page-container';

document.body.append( container );

//

container.append( Menu );
container.append( MenuButton );


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

