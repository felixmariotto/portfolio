
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Contact';

container.append( title );

// speech

const speech0 = document.createElement('P');
speech0.innerHTML = "I am eager to answer any information demand and make quotation tailored to your special needs. I you want to discuss verbally, let's organize a Skype or Zoom meeting with you and your team.";

const speech1 = document.createElement('P');
speech1.innerHTML = "email : felix.mariotto@gmail.com";

const speech2 = document.createElement('P');
speech2.innerHTML = 'Linkedin : https://www.linkedin.com/in/felixmariotto'

const speech3 = document.createElement('P');
speech3.innerHTML = 'GitHub : https://github.com/felixmariotto'

container.append( speech0, speech1, speech2, speech3 );

//

export default container
