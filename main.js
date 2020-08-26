function $getElById (id) {
    return document.getElementById(id);
   }


const  $btn = $getElById('btn-kick');
const $enemyButton = $getElById('btn-enemy-kick');
const $randomButton = $getElById('btn-random')



const  character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    random: random,
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    random: random,
}

$btn.addEventListener('click', function () {
    character.changeHP(random(20));
    });

$enemyButton.addEventListener ('click', function () {
    enemy.changeHP(random(20));
})

$randomButton.addEventListener ('click', function () {
    Math.random() > .5 ? character.changeHP(random(20)) : enemy.changeHP(random(20))
})
function init () {
    character.renderHP();
    enemy.renderHP();
    
}

function renderHP () {
    this.renderHPLife();
    this.renderProgressbarHP();
    
}
function renderHPLife () {
   
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderProgressbarHP () {
    this.elProgressbar.style.width = this.damageHP/this.defaultHP* 100 + '%';
}

function changeHP (count) {

    this.damageHP -= count;
    
const log = this === enemy ? generateLog(this, character, this.damageHP, this.defaultHP, count ) : generateLog (this, enemy, this.damageHP, this.defaultHP, count );
    log;

    if ( this.damageHP <= 0) { 
        this.damageHP = 0;
        alert ('Бедный ' + this.name + '  проиграл бой');
        disableButton ();
        
    } 
   
    this.renderHP();
}

function disableButton (){
    $btn.disabled = true;
    $enemyButton.disabled = true; 
    $randomButton.disabled = true;
}

function random (num) {
    return Math.ceil(Math.random () * num);
}

function generateLog (firstPerson,secondPerson,damageHP, defaultHP, count) {


const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. — Нанесено урона ${count} XP [— Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ] ]` ,
    `${firstPerson.name}, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника  — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.  — Нанесено урона ${count} XP [ ${damageHP} / ${defaultHP} ]`,
];



const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
let i = logs[random(logs.length - 1)];
$p.innerText = `${i}`;
$logs.insertBefore($p, $logs.children[0]);



 
}





init();




