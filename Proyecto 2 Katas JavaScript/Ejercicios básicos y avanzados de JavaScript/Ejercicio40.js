/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.*/

function findArrayIndex(array, text) {
    //Tu codigo
let index = 0;
    for (const item of array) {
        if (item === text) {
            return index;
        }
    index++;
}

return -1;

}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Rey"));


