
import Home from './pages/home/Home.js';

//

let currentPage;

//

export default function goToHash( hash ) {

	// get hash string

	hash = hash || window.location.hash;

	window.location.hash = hash;

	hash = hash.replace( '#', "" );

	if ( !hash || !hash.length ) hash = "page=home";

	// parse hash string

	const params = {};

	const queries = hash.split('&');

	queries.forEach( (query) => {

		if ( !query.includes('=') ) console.error('malformed param in URL fragment : no "="');

		const [ param, value ] = query.split('=');

		params[ param ] = value;

	});

	// now that the parameters have been parsed,
	// we update the website according to those.

	// update page :

	if (
		params.page &&
		params.page !== currentPage 
	) {
		goToPage( params.page );
		currentPage = params.page;
	}

}

//

function goToPage( pageName ) {

	// clear the body from all pages

	const body = document.body;

	if ( body.contains( Home ) ) body.removeChild( Home );

	// add the right page

	switch ( pageName ) {

	case 'home' :
		body.append( Home );
		break

	default :
		body.append( Home );
		break;

	}

}