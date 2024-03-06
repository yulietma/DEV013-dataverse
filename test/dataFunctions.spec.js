import { sortData } from '../src/dataFunctions.js';
import { data as testData } from './data.js';


// Se crea primer test para la funcioón de ordenamiento
describe('sortData function', () => {
  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden ascendiente
  const sortAsc = [testData[1], testData[0], testData[2]];
  it('Se retornan los datos ordenados de forma ascendente', () => {
    const resultAsc = sortData(testData, "name", "asc");
    expect(resultAsc).toEqual(sortAsc);
  });

  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden descendiente
  const sortDesc = [testData[2], testData[0], testData[1]];
  it('Se retornan los datos ordenados de forma descendente', () => {
    const resultDesc = sortData(testData, "name", "desc");
    expect(resultDesc).toEqual(sortDesc);
  });
});

