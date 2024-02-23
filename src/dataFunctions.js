// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//Este archivo va a contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones).

export const filterGender = (data, gender) => {
  console.log(gender);
  return data.filter( item => {
    if (gender === item.facts.genero){
      return true;
    }
    else {
      return false;
    }
    
    })
  };


export const anotherExample = () => {
  return [];
export const filterByAge = (data, range) => {
  console.log (range);
  return data.filter( item => {
   if( range === item.facts.RangoDeEdad){
    return true;
   } else {
    return false;
   }
    
  });
};
 //Funcion para botòn deslizante//
 document.getElementById('scrollButton').addEventListener('click', function() {
  const root = document.getElementById('root');
  root.scrollIntoView({ behavior: 'smooth' });
});














//Funcion ordenamiento alfabetico
export const sortData = (data, sortBy, sortOrder) => {
  if (data.length === 0) {
    return false;
  }

  allData.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (allData === "asc") {
      return nameA.localeCompare(nameB);

    } else if (allData === "desc") {
      return nameB.localeCompare(nameA);
    }
  });

  return allData;
};
