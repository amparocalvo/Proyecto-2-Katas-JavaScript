//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div= document.createElement('div');
document.body.appendChild(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div1= document.createElement('div');
const p = document.createElement('p');

p.textContent= "soy un parrafo dentro de div";
div.appendChild(p);
document.body.appendChild(div);
console.log(div1);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div2= document.createElement('div');

for(let i=1; i<=6;i++){
    const p=document.createElement('p');
    p.textContent =`Parrafo número ${i}`;
    div2.appendChild(p);
}
document.body.appendChild(div2);
console.log(div2);


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p1= document.createElement('p');
p1.textContent='Soy dinamico!';
document.body.appendChild(p1);
console.log(p);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 =document.querySelector('.fn-insert-here');
h2.textContent= 'Wubba Lubba dub dub';
console.log(h2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul= document.createElement('ul');
for(const app of(apps)){
    const li= document.createElement('li');
    li.textContent=app;
    ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const remove = document.querySelectorAll('.fn-remove-me');
remove.forEach((element) =>{
    element.remove();
});
console.log(remove);

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divs= document.querySelectorAll('div');
if(divs.length>=2){

    divs[0].textContent= 'Soy el primer div';
    divs[1].textContent= 'Soy el segundo div';


    const pMedio= document.createElement('p');
    pMedio.textContent='Voy en medio!';

    const segundoDiv= divs[1];
    segundoDiv.parentNode.insertBefore(pMedio,segundoDiv);
}
console.log(divs);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.

const divsInsertar = document.querySelectorAll('.fn-insert-here');

divsInsertar.forEach((div)=> {
    const pInsertar= document.createElement('p');
    pInsertar.textContent='Voy dentro!';
    div.appendChild(pInsertar);
});

console.log(divsInsertar);


