import { example, anotherExample } from '../src/dataFunctions.js';


// En este archivo tendrás hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js. (filterBy, sortBy, etc.)


describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
