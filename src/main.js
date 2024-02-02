import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//Carpeta donde se mostrará toda interacción con el DOM
// renderio data de forma dinamica
// creacion de elemento
//pendiente cargar 

document.getElementById('root').appendChild(renderItems(data))
console.log(renderItems(data));