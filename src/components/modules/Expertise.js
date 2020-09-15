
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.append( texts.modules.expertise.title );

container.append( title );

// presentation field

const presentationTitle = document.createElement('H3');
presentationTitle.append( texts.modules.expertise.presentation.title );

const speech1 = document.createElement('P');
speech1.append( texts.modules.expertise.presentation.speech1 );

const speech2 = document.createElement('P');
speech2.append( texts.modules.expertise.presentation.speech2 );

container.append( presentationTitle, speech1, speech2 );

// service field

const serviceTitle = document.createElement('H3');
serviceTitle.append( texts.modules.expertise.service.title );

const serviceSpeech = document.createElement('P');
serviceSpeech.append( texts.modules.expertise.service.speech );

container.append( serviceTitle, serviceSpeech );

//

export default container
