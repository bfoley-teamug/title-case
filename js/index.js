let one = document.getElementById("one");  
let two = document.getElementById("two"); 
let three = document.getElementById("three"); 

one.addEventListener('click', (e) => {
 
  e.preventDefault();  
 
  const letters = document.getElementById("letters"); 
  const input = letters.querySelector(".form-control");
  const text = input.value; 
  
  function titleCase(text) {
    const words = [];
    for(let word of text.toLowerCase().split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
  }
  
  const p = document.getElementById('display');
  p.textContent = titleCase(text); 
})

two.addEventListener('click', (e) => {
 
  e.preventDefault();  
 
  const letters = document.getElementById("letters"); 
  const input = letters.querySelector(".form-control");
  const text = input.value; 
  
  function titleCase(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  
  const p = document.getElementById('display');
  p.textContent = titleCase(text); 
})

three.addEventListener('click', (e) => {
  console.log("hello world");
  e.preventDefault();  
 
  const letters = document.getElementById("letters"); 
  const input = letters.querySelector(".form-control");
  const text = input.value; 
  
  function titleCase(text) {
    return text.split('').map(function(v) {
      var chance = Math.round(Math.random());
      return v = chance ? v.toUpperCase() : v.toLowerCase();
    }).join('');
  }
  
  const p = document.getElementById('display');
  p.textContent = titleCase(text); 
})