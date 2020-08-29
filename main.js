function $getElById (id) {
    return document.getElementById(id);
   }

   let htmlLogs;
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
    
const log = this === enemy ? generateLog(this, character,  count ) : generateLog (this, enemy,  count );
    log;
    createHtmlLogs (htmlLogs);
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

function generateLog (firstPerson,secondPerson, count) {

    const {name, damageHP, defaultHP} = firstPerson;
    const {name: nameEnemy} = secondPerson;

const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ] ]` ,
    `${name}, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника  — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику.  — Нанесено урона -${count} XP [ ${damageHP} / ${defaultHP} ]`,
];

 htmlLogs = logs[random(logs.length - 1)];
return htmlLogs;
 
}

function createHtmlLogs (htmlLogs) {
    const $logs = document.querySelector('#logs');
    const $p = document.createElement('p');
    let i = logs[random(logs.length - 1)];
    $p.innerText = `${htmlLogs}`;
    $logs.insertBefore($p, $logs.children[0]);

}

init();




