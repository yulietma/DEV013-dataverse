import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// console.log(example, renderItems(data), data);
// usar el HTML
// renderio data de forma dinamica
// creacion de elemento
//pendiente cargar 

document.getElementById('root').appendChild(renderItems(data))