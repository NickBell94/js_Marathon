const  $btn = document.getElementById('btn-kick');
const $enemyButton = document.getElementById('btn-enemy-kick');
const $randomButton = document.getElementById('btn-random');

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

function renderHP (renderHP) {
    character.renderHPLife.apply(character);
    enemy.renderHPLife.apply(enemy);
}
function renderHPLife (renderHPLife) {
   
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderProgressbarHP (renderProgressbarHP) {
    
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP (count, person) {
    
    if ( this.damageHP <= count) { 
        this.damageHP = 0;
        alert ('Бедный ' + this.name + '  проиграл бой');
        disableButton ();
    } else {
        this.damageHP -= count;
    }
    renderHP(this);
}

function disableButton (){
    $btn.disabled = true;
    $enemyButton.disabled = true; 
    $randomButton.disabled = true;
}

function random (num) {
    return Math.ceil(Math.random () * num);
}

init();




