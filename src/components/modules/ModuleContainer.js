
import './modules.css';

import Expertise from './Expertise.js';
import Prototypes from './Prototypes.js';
import Casting from './Casting.js';
import Doc from './Doc.js';
import Contact from './Contact.js';

//

const container = document.createElement('DIV');
container.id = "module-container";

//

function setModule( moduleName ) {

	container.innerHTML = '';

	switch ( moduleName ) {

	case 'expertise' :
		container.append( Expertise );
		break

	case 'prototypes' :
		container.append( Prototypes );
		break

	case 'casting parts' :
		container.append( Casting );
		break

	case 'technical doc' :
		container.append( Doc );
		break

	case 'contact' :
		container.append( Contact );
		break

	}

}

//

export { setModule }
export default container