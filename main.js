let myChart;

const fetchPokemon=() =>{
    remover();
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res) => {

        if(res.status != "200"){

            console.log(res);
            pokeimagen("./imagenes/notFound2.png");
            myChart.destroy();
        }
        else{

            return res.json();
        }
       //console.log(res);
    }).then((data =>{
       // console.log(data);
        let stat = data.stats;//obteniendo arreglo de objetos de estadisticas
        var names = [];
        var values = [];

        for(let i = 0;i<stat.length;i++){
           // let statName = data.stats[i].stat.name;
            //let stat_2 = data.stats[i].base_stat;
            names.push(stat[i].stat.name)
            values.push(stat[i].base_stat)
            
            
        }


        graficas(names,values);
       // console.log(names);
        //console.log(values);

        
       // console.log(statName);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);

        pokeimagen(pokeImg);
//----------------------------DATOS-------------------
        let tipo = `tipo: ${data.types[0].type.name}` ;
        let peso = `peso : ${data.weight}`;
        let nombre = `nombre : ${data.name}`;
        let altura = ` altura : ${data.height}`;

        /*let tipo = data.types[0].type.name;
        let peso = data.weight;
        let nombre = data.name;
        let altura = data.height;*/

        console.log(peso);
        console.log(tipo);
        console.log(nombre);


         document.getElementById("tipo").value = tipo;
         document.getElementById("peso").value = peso;
         document.getElementById("altura").value = altura;


        // const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;



//-----------------------------MOVIMIENTOS--------------------

        let movimientos = data.moves;
        console.log(movimientos);
        console.log(movimientos[0].move.name)
        
        for(let i = 0;i<movimientos.length;i++){

            agregarPoder(movimientos[i].move.name); 
            //console.log(movimientos[i].move.name);


        }

        


//-----------------------------MOVIMIENTOS--------------------


    }))


    
}




fetchPokemon();

const pokeimagen = (url) =>{

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeimagen("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");

const imprimir = ()=>{

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("hola " + pokeInput);


}




const statistics = (arreglo) => {

    



}







/*------------------------CODIGO ESTADISTICAS-----------------------------------*/ 


//const names = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
//const ages = [1,2,3,4,5,6]

function graficas(poderes,niveles){

    const elemento = document.getElementById("myChart");
    if (myChart) {
        myChart.destroy();
    }

 myChart = new Chart(elemento,{

    type:'radar',
    data:{
        labels:poderes,
        datasets: [{

            label:"stats",
            data:niveles,
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        
        }]
    }

})


}

/*---------LISTA PODERES------------*/



const list = document.getElementById('container-ul');

function agregarPoder(poder){

       // remover();
       const myList = document.createElement('li');
       myList.innerHTML = poder; 
       //inputText.value;
       list.appendChild(myList);
        //create span
        //const mySpan = document.createElement ('span');

}


/*----------------REMOVER MOVIMIENTOS------------------*/

function remover() {

    //console.log(isEmpty("myList")); 
    const list = document.getElementById("container-ul");

    while( !isEmpty("container-ul")){
    list.removeChild(list.firstElementChild);
    }
    
  }

  function isEmpty(id) {
    return document.getElementById(id).innerHTML.trim() == "";
  }
  


//graficas(names,ages);