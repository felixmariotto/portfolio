
import './menuButton.css';

//

const container = document.createElement('I');
container.id = 'menu-button';
container.classList.add('fa', 'fa-bars');

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

			container.classList.remove('fa-times');
			container.classList.add('fa-bars');

		}, 200 )

		break

	case 'close' :

		setTimeout( () => {

			container.classList.remove('fa-bars');
			container.classList.add('fa-times');

		}, 200 )

		break

	}

}

//

export { updateButtonTo }
export default container