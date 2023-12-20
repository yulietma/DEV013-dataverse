export const renderItems = (data) => {
  console.log(data)
  let html = '';
  data.forEach(woman => html += `
  
    <ul>
      <li itemtype="" itemscope="">${woman.name}</li>
    </ul>
  
  `);
  return html;
};

