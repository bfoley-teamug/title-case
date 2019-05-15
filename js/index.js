let one = document.getElementById("one"); 
let two = document.getElementById("two"); 
let twoPointFive = document.getElementById("two-point-five");
let three = document.getElementById("three"); 

let colours = ["#000000", "#FF0000", "#990066", "#FF9966", "#996666", "#00FF00", "#CC9933", "#000080", "#008000", "#2F4F4F", "#FF69B4", "#e9967a", "#ff8c00"], 
    idx;

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

twoPointFive.addEventListener('click', (e) => {
 
  e.preventDefault();  
  console.log("David Bowie");  
  const letters = document.getElementById("letters"); 
  const input = letters.querySelector(".form-control");
  const text = input.value; 
  
  function camelCase(text) {
    return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
  }
  
  const p = document.getElementById('display');
  p.textContent = camelCase(text); 
})

three.addEventListener('click', (e) => {
  
  e.preventDefault();  
  console.log("hello world");
 
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
 
  
  var div = $('#display'); 
    var chars = div.text().split('');
    div.html('');     
    for(var i=0; i<chars.length; i++) {
        idx = Math.floor(Math.random() * colours.length);
        var span = $('<span>' + chars[i] + '</span>').css("color", colours[idx]);
        div.append(span);
    }
  
})