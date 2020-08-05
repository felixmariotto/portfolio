
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Casting Parts';

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = 'Your project is designed. Now you can choose lost-wax casting via 3D printing to speed up your process, and ensure that the finished jewel you will get is as close as possible from what we designed together. Armed with my jewelry handcrafting know-how, particularly in the stone setting field, I can adapt your design to the technical requirements of 3D printing, casting, and all the subsequents stages of jewelry handcrafting.'

const speech2 = document.createElement('P');
speech2.innerHTML = 'If you are not lucky enough to own your own 3D printer, it will be my pleasure to lead you towards the right contractor.'

container.append( speech1, speech2 );

//

export default container
