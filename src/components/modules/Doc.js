
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.append( texts.modules.doc.title );

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.append( texts.modules.doc.speech1 );

const speech2 = document.createElement('P');
speech2.append( texts.modules.doc.speech2 );

container.append( speech1, speech2 );

//

export default container
