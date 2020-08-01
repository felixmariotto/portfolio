
import './index.css';
import MenuButton from './components/menuButton/MenuButton.js';

//

const container = document.createElement('DIV');
container.id = 'page-container';

document.body.append( container );

//

container.append( MenuButton );
