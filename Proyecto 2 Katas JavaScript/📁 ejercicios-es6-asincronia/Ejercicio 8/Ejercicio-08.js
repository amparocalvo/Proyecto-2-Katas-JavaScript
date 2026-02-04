const API_URL= 'https://thronesapi.com/api/v2/Characters';

const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');
let charactersData=[];

async  function getCharacters(){
    try{
        const response = await fetch(API_URL);
        const characters= await response.json();

        charactersData=characters;

        characters.forEach(character => {
            const option= document.createElement('option');
            option.value=character.id;
            option.textContent=character.fullName;
            select.appendChild(option);
        });

        image.src=characters[0].imageUrl;
        
        select.addEventListener('change',(event)=>{
            const selectedId= Number(event.target.value);
            const selectedCharacter= charactersData.find(
            character =>character.id=== selectedId
        );
        image.src= selectedCharacter.imageUrl;
    });

    }catch(error){
        console.error('Error, no se obtienen los personajes',error);
    }
    
}

getCharacters();