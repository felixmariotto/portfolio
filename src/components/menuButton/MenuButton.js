
import './menuButton.css';
import Menu from '../menu/Menu.js';

//

let isMenuOpen = false;

//

const container = document.createElement('DIV');
container.id = 'menu-button';

//

container.addEventListener( 'click', () => {

	if ( isMenuOpen ) {

		Menu.classList.remove( 'anim-open-menu' );
		Menu.classList.add( 'anim-close-menu' );

	} else {

		Menu.classList.remove( 'anim-close-menu' );
		Menu.classList.add( 'anim-open-menu' );

	}

	isMenuOpen = !isMenuOpen

})

//

document.body.append( Menu );

//

export default container