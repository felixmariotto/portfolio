
import './menu.css';

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

const moduleContainer = document.createElement('DIV');
moduleContainer.id = "module-container";
moduleContainer.innerHTML = 'module';

content.append( moduleContainer );

const arrowBack = document.createElement('I');
arrowBack.classList.add('fa', 'fa-long-arrow-left');
arrowBack.id = "module-container-arrow-back";

moduleContainer.append( arrowBack );

//

linksContainer.append( MenuLink( 'expertise', 'fff' ) );
linksContainer.append( MenuLink( 'prototypes', 'aa' ) );
linksContainer.append( MenuLink( 'casting parts', 'gr' ) );
linksContainer.append( MenuLink( 'technical doc', 'nn' ) );

linksContainer.append( MenuLink( 'contact', 'gre' ) );

//

function MenuLink( text, componentToOpen ) {

	const link = document.createElement('DIV');
	link.classList.add( 'menu-link' );
	link.innerHTML = text;

	link.addEventListener( 'click', () => {

		content.classList.add( 'expanded' );

		console.log( componentToOpen )

	});

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