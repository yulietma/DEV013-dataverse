import { filterGender, filterByAge, sortData, clearFilters} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; // Importa los datos primero

document.getElementById('root').appendChild(renderItems(data));


let filteredData= data;
const selectElement = document.querySelector("#filter");
const root = document.querySelector("#root");
const selectAge= document.querySelector("#order")
const orderBook = document.querySelector("#orderad");
filteredData = [...data];


// Evento change para el elemento select, género.
selectElement.addEventListener("change", ()=>{
  let selectGender = selectElement.options[selectElement.selectedIndex].value
  console.log(selectGender);

  let resultFilter = filterGender(data, selectGender)
  console.log(resultFilter);
root.appendChild(renderItems(resultFilter));
}); 


// Evento change por Filtro rango de edad 
selectAge.addEventListener("change", () => {
let range = selectAge.options[selectAge.selectedIndex].value;
console.log(range);

let resultAge= filterByAge(data,range)
console.log(resultAge);
root.appendChild(renderItems(resultAge));
 });


//CleanButton
document.querySelector(".clearButton").addEventListener("click", (event) => {
  root.innerHTML = "";//limpia contenedor
  root.appendChild(renderItems(clearFilters(data)));//renderia de nuevo la data original
  selectElement.selectedIndex = 0;// lo establece  ala opcion pre determinada al inicio 
  selectAge.selectedIndex = 0;

});
 
// Evento change para el ordenamiento
orderBook.addEventListener("change", (event) => {
  
  // Ordenamos los datos filtrados por nombre
  filteredData = sortData(filteredData, "name", event.target.value);
  
  // Limpiamos el contenido anterior y renderizamos los datos ordenados
  root.innerHTML = '';
  root.appendChild(renderItems(filteredData));
});

