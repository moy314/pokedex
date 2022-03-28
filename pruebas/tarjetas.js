const container = document.querySelector(".container");

function fetchPokemon(id){

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
     createPokemon(data);

    })


    
}

let offset = 1;
let limit  = 8;

// PAGINACION/
function anterior(){

    if(offset != 1){
    offset -=9;
    removerTarjeta(container);
    numeroPokemons(offset,limit)
}
        
}

function siguiente(){

    if(offset !=890){
        offset +=9;
    removerTarjeta(container);

    numeroPokemons(offset,limit)
    }
    


}


/*const anterior = document.addEventListener('click',()=>{

  
})

const siguiente = document.addEventListener('click',()=>{

  
})*/










function numeroPokemons(offset,limit){
    

    for(let i = offset; i<= offset + limit ;i++){


        fetchPokemon(i);
        console.log(i);
    }
}





//fetchPokemon(1);



function createPokemon(pokemon){

    const card = document.createElement('div');
    card.classList.add('poke-block');
    


    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imgContainer');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;


    
    const type = document.createElement('p');
    type.classList.add('color');
    type.textContent = pokemon.types[0].type.name;

    card.appendChild(number);
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(type);
    container.appendChild(card);
    
    
    
}


/*detalles pokemon en tarjetas*/








numeroPokemons(offset,limit);



//--------------colores-----

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F'
}

console.log(typeColors["ice"]);


// REMOVER 



function removerTarjeta(parent) {

    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }


}