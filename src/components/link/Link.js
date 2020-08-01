
const linkEventEmitter = document.createElement('DIV');

//

function emit( moduleName ) {

	var event = new CustomEvent( "clicklink", {
		detail: { moduleName }
	});

	linkEventEmitter.dispatchEvent( event );

}

//

export { linkEventEmitter }

export default function Link( moduleName ) {

	const link = document.createElement('DIV');
	link.classList.add('link');

	link.addEventListener( 'click', () => {

		emit( moduleName )

	})

	return link

}