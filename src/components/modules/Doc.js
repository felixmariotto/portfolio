
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Technical Documentation';

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = "The experience processing the jewel we designed together will be a child's play, thanks to the assembly instructions sheets and stone setting plans I send you at the end of the project.";

const speech2 = document.createElement('P');
speech2.innerHTML = 'I adapt the documentation to every project, and listen to your special demands, be it parts spreadsheets, documents for public presentations or customer use, outlined 4-views for painting... Name your own needs.'

container.append( speech1, speech2 );

//

export default container
