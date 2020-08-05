
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Web Development';

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = "Web development has been my passion for a couple of years, and I offer my services in this field. My skills in jewelry, 3D modeling and web development is a rare and precious combination if you are a jewelry company with a project of high-end website."

const speech2 = document.createElement('P');
speech2.innerHTML = 'This website was entirely designed and coded by myself.'

container.append( speech1, speech2 );

//

export default container
