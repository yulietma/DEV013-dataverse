import { filterGender, filterByAge, clearFilters } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; // Importa los datos primero


document.getElementById('root').appendChild(renderItems(data));

const selectElement = document.querySelector("#filter");
const root = document.querySelector("#root");
const selectAge = document.querySelector("#order")



// Evento change para el elemento select, género.
selectElement.addEventListener("change", () => {
  const selectGender = selectElement.options[selectElement.selectedIndex].value


  const resultFilter = filterGender(data, selectGender)
  root.innerHTML = "";
  root.appendChild(renderItems(resultFilter));
});


// Evento change por Filtro rango de edad 
selectAge.addEventListener("change", (event) => {
  const range = selectAge.options[selectAge.selectedIndex].value;

  const resultAge = filterByAge(data, range)
  root.innerHTML = "";
  root.appendChild(renderItems(resultAge));
});

/* boton de limpiar filtros */
document.querySelector(".clearButton").addEventListener("click", (event) => {
  root.innerHTML = "";//limpia contenedor
  root.appendChild(renderItems(clearFilters(data)));//renderia de nuevo la data original
  selectElement.selectedIndex = 0;// lo establece  ala opcion pre determinada al inicio 
  selectAge.selectedIndex = 0;

});


/*
 Funcion ordenamiento.
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