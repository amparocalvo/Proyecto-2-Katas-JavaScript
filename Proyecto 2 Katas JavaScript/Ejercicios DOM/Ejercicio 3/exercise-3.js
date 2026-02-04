//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries= document.createElement('ul');
for (const country of countries){
	const li= document.createElement('li');
	li.textContent= country;
	ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);
console.log(ulCountries);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const toRemove =document.querySelector('.fn-remove-me');
toRemove.remove();
console.log('Elemento eliminado ', toRemove);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementosen el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere= document.querySelector('div[data-function="printHere"]');
const ul=document.createElement('ul');

for (const car of cars){
	const li= document.createElement('li');
	li.textContent= car;
	ul.appendChild(li);
	
}
divPrintHere.appendChild(ul);
console.log(ul);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');
for(const country of countries1){
	const cardDiv= document.createElement('div');
	const h4= document.createElement('h4');
	h4.textContent = country.title;

	const img= document.createElement('img');
	img.src=country.imgUrl;
	img.alt=country.title;

	cardDiv.appendChild(h4);
	cardDiv.appendChild(img);
	container.appendChild(cardDiv);

}
document.body.appendChild(container);
console.log(container);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const btnDeleteLast= document.createElement('button');
btnDeleteLast.textContent='Eliminar último';

btnDeleteLast.addEventListener('click', ()=>{
	const lastCard = container.lastElementChild;
	if(lastCard){
		console.log("Borrando: ", lastCard);
		lastCard.remove();
	}
});
document.body.appendChild(btnDeleteLast);
console.log(btnDeleteLast);



//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.*/


const cards = container.querySelectorAll('div');

cards.forEach((cardDiv) => {
	const btnDeleteThis= document.createElement('button');
	btnDeleteThis.textContent = 'Elimina esta tarjeta';

	btnDeleteThis.addEventListener('click',()=>{
		cardDiv.remove();

	});
	cardDiv.appendChild(btnDeleteThis);

	console.log(btnDeleteThis);

});

