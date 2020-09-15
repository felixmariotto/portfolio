
import './menu.css';

import Link from '../link/Link.js';

import texts from '../../data/texts.js';

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

chaptersContainer.append( MenuLink( 'consulting', 'expertise' ) );
chaptersContainer.append( MenuLink( 'prototypes', 'prototypes' ) );
chaptersContainer.append( MenuLink( 'casting', 'casting parts' ) );
chaptersContainer.append( MenuLink( 'doc', 'technical doc' ) );
chaptersContainer.append( MenuLink( 'webdev', 'webdev' ) );

//

const moreInfoContainer = document.createElement('DIV');
moreInfoContainer.id = 'more-info-container';

linksContainer.append( moreInfoContainer );

moreInfoContainer.append( MenuLink( 'samples', 'samples' ) );
moreInfoContainer.append( MenuLink( 'contact', 'contact' ) );

//

function MenuLink( textType, linkTo ) {

	const link = Link( linkTo );
	link.classList.add( 'menu-link' );
	link.append( texts.menu[ textType ] )

	//

	const arrowContainer = document.createElement('DIV');
	arrowContainer.classList.add( 'menu-link-arrow-container' );

	link.append( arrowContainer );

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-caret-right');

	arrowContainer.append( icon );

	//

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