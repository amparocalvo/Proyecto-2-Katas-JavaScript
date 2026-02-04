//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button= document.querySelector('.showme');
console.log(button);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1= document.querySelector('#pillado');
console.log(h1);

//1.3 Usa querySelector para mostrar por consola todos los p

const p=document.querySelectorAll('p');
console.log(p);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemons =document.querySelectorAll('.pokemon');
console.log(pokemons);


//1.5 Usa querySelector para mostrar por consola todos los elementos conel atributo data-function="testMe".

const testMeElements =document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributodata-function="testMe".

const threeTestMe =document.querySelectorAll('[data-function="testMe"]')[2];
console.log(threeTestMe);

