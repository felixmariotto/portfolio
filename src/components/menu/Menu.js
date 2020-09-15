
import './menu.css';

import Link from '../link/Link.js';

import texts from '../../data/texts.js';
import { setLanguage } from '../../data/texts.js';

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

// FLAGS

const flags = document.createElement('DIV');
flags.id = 'menu-flags';

menuContent.append( flags );

const frFlag = document.createElement('IMG');
frFlag.src = "https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/flag-fr.png";
const setFrench = () => { setSelectedFlat( frFlag, 'french' ) };
frFlag.onclick = setFrench;

const engFlag = document.createElement('IMG');
engFlag.src = "https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/flag-eng.png";
const setEnglish = () => { setSelectedFlat( engFlag, 'english' ) };
engFlag.onclick = setEnglish;

flags.append( frFlag, engFlag );

function setSelectedFlat( flagToSelect, language ) {

	frFlag.classList.remove('selected');
	engFlag.classList.remove('selected');

	flagToSelect.classList.add('selected');

	//

	setLanguage( language )

}

// set french if navigator is in french

switch ( navigator.language  ) {

    case 'fr' :
    case "fr-CH" :
    case "fr-CA" :
        setFrench();
        break

    default :
    	setEnglish();
    	break

}

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