
import './menu.css';

import Link from '../link/Link.js';

//

const container = document.createElement('DIV');
container.id = "menu";

const content = document.createElement('DIV');
content.id = "menu-content";

container.append( content );

//

const linksContainer = document.createElement('DIV');
linksContainer.id = "links-container";

content.append( linksContainer );

//

linksContainer.append( MenuLink( 'expertise' ) );
linksContainer.append( MenuLink( 'prototypes' ) );
linksContainer.append( MenuLink( 'casting parts' ) );
linksContainer.append( MenuLink( 'technical doc' ) );

linksContainer.append( MenuLink( 'contact' ) );

//

function MenuLink( text ) {

	const link = Link( text );
	link.classList.add( 'menu-link' );
	link.innerHTML = text;

	return link

}

//

function openMenu() {

	container.classList.remove( 'anim-close-menu' );
	container.classList.add( 'anim-open-menu' );

}

//

function closeMenu() {

	container.classList.remove( 'anim-open-menu' );
	container.classList.add( 'anim-close-menu' );

}

//

export { openMenu }
export { closeMenu }
export default container