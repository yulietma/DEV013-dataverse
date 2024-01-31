export const renderItems = (data) => {
  const ul = document.createElement('ul')
  for (let i = 0; i < data.length; i++) {
      const element = data[i];
      // console.log(element);
      // template string
      
      // ul.innerHTML += '<li>'+element.name+'</li>' 
      ul.innerHTML += `<li itemscope itemtype="${element.name}">
      <h2 itemprop="name">${element.name}</h2>
      <img src="${element.imageUrl}" alt="${element.name}" itemprop="image" />
  
      <dt>Descripción corta:</dt>
      <dd itemprop="shortDescription">${element.shortDescription}</dd>
  
      <dt>Descripción:</dt>
      <dd itemprop="description">${element.description}</dd>
  
      <dt>Dato curioso 1:</dt>
      <dd itemprop="curiousFact1">${element.facts.curiousFact1}</dd>
  
      <dt>Dato curioso 2:</dt>
      <dd itemprop="curiousFact2">${element.facts.curiousFact2}</dd>
    </li>`
  }
  return ul
};

//crear fncion html