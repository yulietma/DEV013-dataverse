// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//Este archivo va a contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones).
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
