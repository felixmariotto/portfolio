
import './menuButton.css';

//

const container = document.createElement('I');
container.id = 'menu-button';
container.classList.add('fa', 'fa-bars');

//

function clearClasses() {
	container.classList.remove('fa-times');
	container.classList.remove('fa-bars');
	container.classList.remove('fa-arrow-left');
}

//

function updateButtonTo( state ) {

	// elastic animation
	container.classList.remove('animate-menu-icon');
	setTimeout( () => {
		container.classList.add('animate-menu-icon');
	}, 0 );

	switch ( state ) {

	case 'menu' :

		setTimeout( () => {

			clearClasses()
			container.classList.add('fa-bars');

		}, 200 )

		break

	case 'close' :

		setTimeout( () => {

			clearClasses()
			container.classList.add('fa-times');

		}, 200 )

		break

	case 'back' :

		setTimeout( () => {

			clearClasses()
			container.classList.add('fa-arrow-left');

		}, 200 )

		break

	}

}

//

export { updateButtonTo }
export default container