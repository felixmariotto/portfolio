
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = texts.modules.prototypes.title;

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = texts.modules.prototypes.speech1;

const speech2 = document.createElement('P');
speech2.innerHTML = texts.modules.prototypes.speech2;

container.append( speech1, speech2 );

//

export default container
