const img = document.querySelector(".random-image");

function getRandomPokemonId(){
    return Math.floor(Math.random() *151) +1;

}
async function loadRandomPokemon(){
    try{
        const id=getRandomPokemonId();
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data= await response.json();

        img.src= data.sprites.other["official-artwork"].front_default || data.sprites.front_default;
    }catch(error){
        console.error("Error al cargar Pokemon", error);
    }
    
}
loadRandomPokemon();