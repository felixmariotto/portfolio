
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Consulting';

container.append( title );

// speech

const speech1 = document.createElement('P');
speech1.innerHTML = 'I worked for some years as a technical designer for Lasbleiz Fournier Vitiello in Paris, which is a workshop famous in Place Vendôme high jewelry community for its quality work. Thereafter I lived in Hong Kong for another couple of years, working for Michelle Ong who makes jewels for the finest amateurs of this city-state.'

const speech2 = document.createElement('P');
speech2.innerHTML = 'Armed with the design and project management skills acquired during these years, I can give you precious advices to make your projects happen.'

container.append( speech1, speech2 );

//

export default container
