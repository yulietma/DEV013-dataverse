import { filterGender, filterByAge} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; // Importa los datos primero


document.getElementById('root').appendChild(renderItems(data));

const selectElement = document.querySelector("#filter");
const root = document.querySelector("#root");
const selectAge= document.querySelector("#order")
//const orderBook = document.querySelector("#orderad");


// Evento change para el elemento select, género.
selectElement.addEventListener("change", (event)=>{
  let selectGender = selectElement.options[selectElement.selectedIndex].value
  console.log(selectGender);

  let resultFilter = filterGender(data, selectGender)
  console.log(resultFilter);
root.appendChild(renderItems(resultFilter));
}); 


// Evento change por Filtro rango de edad 
selectAge.addEventListener("change", (event) => {
let range = selectAge.options[selectAge.selectedIndex].value;
console.log(range);

let resultAge= filterByAge(data,range)
console.log(resultAge);
root.appendChild(renderItems(resultAge));
 });

/*
 Funcion ordenamiento
 orderBook.addEventListener("change", function () {
  selectElement.value = "Seleccionar";
  const selectOrder = orderBook.value;
  let bookAsc;

  if (selectOrder === "asc") {
    bookAsc = sortBook("name", "asc");
  } else {
    bookAsc = sortBook("name", "desc");
  }
  root.appendChild(renderItems(bookAsc));
});*/