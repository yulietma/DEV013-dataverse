import { filterGender } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; // Importa los datos primero


document.getElementById('root').appendChild(renderItems(data));

const selectElement = document.querySelector("#filter");
const root = document.querySelector("#root");

// Evento change para el elemento select
selectElement.addEventListener("change", (event)=>{
  let selectGender = selectElement.options[selectElement.selectedIndex].value
  console.log(selectGender);

  let resultFilter = filterGender(data, selectGender)
  console.log(resultFilter);
root.appendChild(renderItems(resultFilter))

root.appendChild="";
}); 
