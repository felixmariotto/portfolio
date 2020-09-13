
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Samples';

container.append( title );

// samples flex box

const samplesContainer = document.createElement('DIV');
samplesContainer.id = "samples-container";

container.append( samplesContainer );

// rendering

const renderBox = document.createElement('DIV');

const cadBox = document.createElement('DIV');

const docBox = document.createElement('DIV');

samplesContainer.append( renderBox, cadBox, docBox );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = "Click here to download some realistic renders and pictures of resin prototypes"

const speech2 = document.createElement('P');
speech2.innerHTML = 'Click here to download some casting parts'

const speech3 = document.createElement('P');
speech3.innerHTML = 'Click here to download samples of documentation ( assembly instructions, stone plans, parts spreadsheets, and more )'

container.append( speech1, speech2, speech3 );

//

export default container