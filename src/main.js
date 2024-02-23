
import { filterGender, filterByAge } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; // Importa los datos primero


document.getElementById('root').appendChild(renderItems(data));

const selectElement = document.querySelector("#filter");
const root = document.querySelector("#root");

// Evento change para el elemento selectt
selectElement.addEventListener("change", (event)=>{
  let selectGender = selectElement.options[selectElement.selectedIndex].value
  console.log(selectGender);

  let resultFilter = filterGender(data, selectGender)
  console.log(resultFilter);
root.appendChild(renderItems(resultFilter))

root.appendChild="";
}); 

import data from './data/dataset.js';
//Carpeta donde se mostrará toda interacción con el DOMM
// renderio data de forma dinamica
// creacion de elemento
//pendiente cargar 

document.getElementById('root').appendChild(renderItems(data))
  //evento change por Filtro rango de edad 
const selectElement= document.querySelector("#order");
const result= document.querySelector("#root");
//maneja el vento cambio en el sector de filtro 

selectElement.addEventListener("change", (event) => {
let range = selectElement.options[selectElement.selectedIndex].value;
console.log(range);
let resufilter= filterByAge(data,range)
console.log(resufilter);
result.innerHTML="";
 resufilter.forEach(resufilter =>{
    result.appendChild(renderItems(resufilter));
 })

//let filtered = filterByAge(data, "3 a 5 años");
//console.log (filtered);
//});
//selecteElement.addEventListener("change", (event )=>{
//let filtered=filterByAge(data,"Todas las edades");
//console.log (filtered);
});
