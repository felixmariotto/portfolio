
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
speech1.innerHTML = "Once your project is designed, you are not left alone in the wild. I send you all the documentation you need to assemble the parts, set the stones, and even communicate and advertise about it."

const speech2 = document.createElement('P');
speech2.innerHTML = 'I adapt the documentation to every project, and listen to your special demands, be it parts spreadsheets, documents for public presentations or customer use, outlined 4-views for painting... Name your own needs.'

container.append( speech1, speech2 );

//

export default container
