
import './menu.css';

import Link from '../link/Link.js';

//

const container = document.createElement('DIV');
container.id = "menu";

const menuContent = document.createElement('DIV');
menuContent.id = "menu-content";

//

const linksContainer = document.createElement('DIV');
linksContainer.id = "links-container";

menuContent.append( linksContainer );

//

const chaptersContainer = document.createElement('DIV');
chaptersContainer.id = 'chapters-container';

linksContainer.append( chaptersContainer );

chaptersContainer.append( MenuLink( 'expertise' ) );
chaptersContainer.append( MenuLink( 'prototypes' ) );
chaptersContainer.append( MenuLink( 'casting parts' ) );
chaptersContainer.append( MenuLink( 'technical doc' ) );

//

const moreInfoContainer = document.createElement('DIV');
moreInfoContainer.id = 'more-info-container';

linksContainer.append( moreInfoContainer );

moreInfoContainer.append( MenuLink( 'contact' ) );

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

	menuContent.classList.remove( 'anim-close-menu' );
	menuContent.classList.add( 'anim-open-menu' );

}

//

function closeMenu() {

	container.classList.remove( 'anim-open-menu' );
	container.classList.add( 'anim-close-menu' );

	menuContent.classList.remove( 'anim-open-menu' );
	menuContent.classList.add( 'anim-close-menu' );

}

//

export { openMenu }
export { closeMenu }
export { menuContent }
export default container