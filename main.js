import {random, countBtn, $getElById, generateLog, disabledButtons } from "./utils.js"
import Pokemon from "./pokemon.js";
import {pokemons} from "./pokemons.js";




function startGame () {

const pokemon1 = pokemons[Math.floor(Math.random()*pokemons.length)];
const pokemon2 = pokemons[Math.floor(Math.random()*pokemons.length)];


const player1 = new Pokemon ({
    ...pokemon1,
    selectors:'player1',
});


const player2 = new Pokemon ({
    ...pokemon2,
    selectors:'player2',
});

const  $control = document.querySelector('.control');
const  $control2 = document.querySelector('.control-2');

const pokemon1buttons = document.querySelectorAll('.control .button');
      pokemon1buttons.forEach($item => $item.remove());

const pokemon2buttons = document.querySelectorAll('.control-2 .button');
      pokemon2buttons.forEach($item => $item.remove());

const removeLogs = document.querySelectorAll('.logs .p');
      removeLogs.forEach($item => $item.remove());

player1.attacks.forEach( item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount,$btn);
    $btn.addEventListener('click', () => {
        player1.changeHP(random(item.maxDamage,item.minDamage), player2, function (count) {
            console.log(generateLog(player1, player2, count));
            if(player2.hp.current <= 0) {
                
                confirm('Сыграем еще?', startGame ());
            }
         
       });
        btnCount();
    })
    $control.appendChild($btn);
})


player2.attacks.forEach( item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount,$btn);
    $btn.addEventListener('click', () => {
        player2.changeHP(random(item.maxDamage,item.minDamage) , function (count) {
            console.log(generateLog(player1, player2, count));
            if(player1.hp.current <= 0) {
                
                confirm('Сыграем еще?', startGame ());
            }
           
       });
        btnCount();
    })
    $control2.appendChild($btn);
})
}
confirm('Сыграем в игру?', startGame ());








