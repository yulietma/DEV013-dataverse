export const renderItems = (data) => {
  const ul = document.createElement('ul')
  ul.classList.add('Contenedor')//agregamos una clase a el elemneto ul
  for (let i = 0; i < data.length; i++) {
      const element = data[i];
      // console.log(element);;
      // coment
      // template string
      //Este archivo debe tener todas las funciones que utilizara para renderizar los elementos dinámicamente.
      // ul.innerHTML += '<li>'+element.name+'</li>' 

      //ul.innerHTML += `<li class= "card" itemscope itemtype="${element.name}">
      //<h2 itemprop="name">${element.name}</h2>
      //<img id="Img" src="${element.imageUrl}" alt="${element.name}" itemprop="image" /> mi titulo se queda arriba 
      ul.innerHTML += `<li class="card" itemscope itemtype="${element.name}">
      <div class="PrimeraCara">
      <h2 itemprop="name">${element.name}</h2>
      <img id="Img" src="${element.imageUrl}" alt="${element.name}" itemprop="image" />
      </div>
      <div class="SegundaCara">
      
      <dl>
      <dt> Genero:</dt>
      <dd interprop="Genero"> ${element.facts.Genero}</dd>

      <dt>Descripción:</dt>
      <dd itemprop="description">${element.description}</dd>
  
      <dt>Dato curioso 1:</dt>
      <dd itemprop="curiousFact1">${element.facts.curiousFact1}</dd>

      <dt>Rango De Edad:</dt>
      <dd itemprop="RangoDeEdad">${element.facts.RangoDeEdad}</dd>

      </dl>
      </div>
      </li>`
  }
  return ul
};

//crear fncion html