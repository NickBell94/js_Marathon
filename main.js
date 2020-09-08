import {random, countBtn, $getElById, generateLog, disabledButtons } from "./utils.js"
import Pokemon from "./pokemon.js";
import {pokemons} from "./pokemons.js";
import {readyToGame, attack1, resetPokemon1, resetPokemon2} from "./game.js"





const  $startGame = $getElById('start');
const  $reset = $getElById('reset');

$startGame.addEventListener('click', () => {
    attack1();
    $startGame.disabled = true;
    $reset.disabled = false;
 });
$reset.addEventListener('click', () => {
    resetPokemon1();
    resetPokemon2();
    $reset.disabled = true;
    $startGame.disabled = false;
 });









