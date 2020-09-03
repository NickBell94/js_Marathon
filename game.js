import {pokemons} from "./pokemons.js";
import Pokemon from "./pokemon.js";
import {random, countBtn, $getElById, generateLog, disabledButtons } from "./utils.js"

const  $control = document.querySelector('.control');
const  $control2 = document.querySelector('.control-2');
let pokemon1, pokemon2,player1, player2;
function readyToGame(){
    pokemon1 = pokemons[Math.floor(Math.random()*pokemons.length)];
    
     player1 = new Pokemon ({
        ...pokemon1,
        selectors:'player1',
    });
    console.log(player1);
    
    pokemon2 = pokemons[Math.floor(Math.random()*pokemons.length)];
    
     player2 = new Pokemon ({
        ...pokemon2,
        selectors:'player2',
    });
    console.log(player2);
    
}


function attack1 (){
    readyToGame();


player1.attacks.forEach( item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount,$btn);
    $btn.addEventListener('click', () => {
        player1.changeHP(random(item.maxDamage,item.minDamage), player2, function (count) {
            console.log(generateLog(player1, player2, count));
            if(player2.hp.current <= 0) {
                //attack1();
                resetPokemon2();
                alert('Вы проиграли');
            } else {
                let attack = player2.attacks[Math.floor(Math.random()*player2.attacks.length)];
                player2.changeHP(random(attack.maxDamage,attack.minDamage), player1, function (count) {
                    console.log(generateLog(player1, player2, count));
                    if(player1.hp.current <= 0) {
                        resetPokemon1();
                        attack1();
                       
                    }
                   
               });
            }
         
       });
        btnCount();
    });
    $control.appendChild($btn);
});




//player2.attacks.forEach( item => {
    //const $btn = document.createElement('button');
   // $btn.classList.add('button');
  //  $btn.innerText = item.name;
   // const btnCount = countBtn(item.maxCount,$btn);

    //$btn.addEventListener('click', () => {
  
      //  btnCount();
    
   // $control2.appendChild($btn);
}

function resetPokemon1() {
    pokemon1 = pokemons[Math.floor(Math.random()*pokemons.length)];
    let pokemon1buttons = document.querySelectorAll('.control .button');
    pokemon1buttons.forEach($item => $item.remove());
     player1 = new Pokemon ({
        ...pokemon1,
        selectors:'player1',
    });
}
function resetPokemon2() {
    pokemon2 = pokemons[Math.floor(Math.random()*pokemons.length)];
    let pokemon2buttons = document.querySelectorAll('.control-2 .button');
    pokemon2buttons.forEach($item => $item.remove());
    
     player2 = new Pokemon ({
        ...pokemon2,
        selectors:'player2',
    });
}

export  {readyToGame, attack1, resetPokemon1, resetPokemon2};