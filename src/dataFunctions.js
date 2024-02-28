// Estas funciones son ejemplos aquí puedes desarrollar tus propias funciones.
//Este archivo va a contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones).


//Primer filtrado, género
export const filterGender = (data, selectGender) => {
  // console.log(selectGender);
  return data.filter( item => {
    if (selectGender === item.facts.genero){
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
  return data.filter( item => {
    if( range === item.facts.RangoDeEdad){
      return true;
    } else {
      return false;
    }
  })
};
//Funcion para botòn deslizante//
document.getElementById('scrollButton').addEventListener('click', function() {
  const root = document.getElementById('root');
  root.scrollIntoView({ behavior: 'smooth' });
});

 /*Funcion de Limpiar filtros */
export const clearFilters =(data)=>{// se crea la funcion y la exportamos
  return data;//muestrame la data 
}
/*Funcion rdenamiento
export const sortBook = (data, sortBy, sortOrder) => {
    data.sort((a, b) => {
      const bookA = a[sortBy].toLowerCase();
      const bookB = b[sortBy].toLowerCase();
  
      if (sortOrder === "asc") {
        return bookA.localeCompare(bookB);
      } else if (sortOrder === "desc") {
        return bookB.localeCompare(bookA);
      }
    });
    return data;
  };*/



