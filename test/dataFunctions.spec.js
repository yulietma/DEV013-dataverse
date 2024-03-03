import { sortData } from '../src/dataFunctions.js';
import { data as testData } from './data.js';


// Se crea primer test para la funcioón de ordenamiento
describe('sortData function', () => {
  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden ascendiente
  const sortAsc = [testData[0], testData[3], testData[1], testData[4], testData[2], testData[5]];
  it('Se retornan los datos ordenados de forma ascendente', () => {
    const resultado = sortData(testData, 'name', 'asc');
    expect(resultado).toEqual(sortAsc);
  });

  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden descendiente
  const sortDesc = [testData[5], testData[2], testData[4], testData[1], testData[3], testData[0]];
  it('Se retornan los datos ordenados de forma descendente', () => {
    const resultado = sortData(testData, 'name', 'desc');
    expect(resultado).toEqual(sortDesc);
  });
});