// Estas funciones son ejemplos aquí puedes desarrollar tus propias funciones.
//Este archivo va a contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones).


//Primer filtrado, género
export const filterGender = (data, selectGender) => {
  console.log(selectGender);
  return data.filter(item => {
    if (selectGender === item.facts.genero) {

      return true;
    }
    else {
      return false;
    }
  })
};

//Segundo filtrado, rango edad..
export const filterByAge = (data, range) => {
  // console.log (range);
  return data.filter(item => {
    if (range === item.facts.RangoDeEdad) {
      return true;
    } else {
      return false;
    }
  })
};
//Funcion para botòn deslizante//
document.getElementById('scrollButton').addEventListener('click', function () {
  const root = document.getElementById('root');
  root.scrollIntoView({ behavior: 'smooth' });
});


/*Funcion ordenamiento
- data: Es el arreglo de objetos que se va a ordenar. Cada objeto en este arreglo representa un elemento que se ordenará, como un libro en este caso.
- sortBy: Es la clave o propiedad por la cual se va a ordenar cada objeto en el arreglo data. Indica qué característica del objeto se utilizará para determinar el orden, como el título del libro, el autor, etc.
- ortOrder: Es el orden en el que se deben ordenar los objetos en el arreglo data. Puede ser "asc" para ascendente (de menor a mayor) o "desc" para descendente (de mayor a menor). Este parámetro determina la dirección de la ordenación.
*/

export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    const compare = valueA.localeCompare(valueB);
    console.log(compare);
    return sortOrder === "asc" ? compare : compare * -1;  });

  return data;
};

/*Funcion de Limpiar filtros */
export const clearFilters = (data) => {// se crea la funcion y la exportamos
  return data;//muestrame la data 

};
