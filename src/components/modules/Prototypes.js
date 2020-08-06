
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Prototypes & 3D viewers';

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = 'Designing is never a seamless process. Our task will be to work jointly to reveal all the unforeseen details and oversights of the original project, in order to arrive at a product esthetically and technically flawless at the delivery date you will request.'

const speech2 = document.createElement('P');
speech2.innerHTML = "To arrive at this perfect design and to save us from discovering flaws in the design late in product development, we will regularly organize design reviews supported by resin prototypes or 3D viewers."

container.append( speech1, speech2 );

//

export default container
