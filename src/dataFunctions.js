// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//Este archivo va a contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones).
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};
 //Funcion para botòn deslizante//
 document.getElementById('scrollButton').addEventListener('click', function() {
  const root = document.getElementById('root');
  root.scrollIntoView({ behavior: 'smooth' });
});