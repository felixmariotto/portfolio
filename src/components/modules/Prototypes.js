
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.append( texts.modules.prototypes.title );

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.append( texts.modules.prototypes.speech1 );

const speech2 = document.createElement('P');
speech2.append( texts.modules.prototypes.speech2 );

const speech3 = document.createElement('P');
speech3.append( texts.modules.prototypes.speech3 );

container.append( speech1, speech2, speech3 );

//

export default container
