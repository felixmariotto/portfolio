
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

	link.addEventListener( 'click', (e) => {

		// hack to keep safari from triggering click events on invisible buttons
		// we get the scene-container parent ( if any ) and check that it's
		// more than 50% in screen space => fuck safari

		/*
		const sceneContainer = link.closest(".scene-container");

		if ( sceneContainer ) {

			const rect = sceneContainer.getBoundingClientRect();

			alert( JSON.stringify( rect ) )

			if ( Math.abs( rect.top ) < ( rect.height / 2 ) ) emit( moduleName )

		} else {

			emit( moduleName )

		}
		*/

		emit( moduleName )

	})

	return link

}