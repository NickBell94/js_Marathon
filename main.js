import Pokemon from "./pokemon.js";



const player1 = new Pokemon ({
    name: 'Pikachu',
    type: 'electric',
    hp:500,
    selectors:'character',
});

const player2 = new Pokemon ({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors:'enemy',
});


function $getElById (id) {
    return document.getElementById(id);
   }

   let htmlLogs;
   const  $btn = $getElById('btn-kick');
   const $enemyButton = $getElById('btn-enemy-kick');
   const $randomButton = $getElById('btn-random')
   const random =  (num) => Math.ceil(Math.random () * num);




const btnCountJolt = countBtn(15, $btn);
const btnEnemyKick = countBtn(15, $enemyButton);
const btnRandomKick = countBtn(15, $randomButton);

function countBtn (count = 15, el) { 
    
    const innerText = el.innerText;
    
    el.innerText = `${innerText}(${count})`;
 return function () {
    count --;
     
     if (count == 0) {
         el.disabled = true;
     }
    
     el.innerText = `${innerText}(${count})`;
     return count;
 }
}

$btn.addEventListener('click', function () {
    player1.changeHP(random(60), function (count) {
         console.log(generateLog(player1, player2, count));
        createHtmlLogs (htmlLogs);
        disabledButtons(player1.hp.current);
    });
    btnCountJolt();
    });

$enemyButton.addEventListener ('click', function () {
    player2.changeHP(random(60), function (count) {
        console.log(generateLog(player1, player2, count));
       createHtmlLogs (htmlLogs);
       disabledButtons(player2.hp.current);
   });
    btnEnemyKick();
});

$randomButton.addEventListener ('click', function () {
const firstPlayer = player1.changeHP(random(60), function (count) {
    console.log(generateLog(player1, player2, count));
   createHtmlLogs (htmlLogs);
   disabledButtons(player1.hp.current);
});

const secondPlayer = player2.changeHP(random(60), function (count) {
    console.log(generateLog(player1, player2, count));
   createHtmlLogs (htmlLogs);
   disabledButtons(player2.hp.current);
});
    Math.random() > .5 ? firstPlayer : secondPlayer;
    btnRandomKick();

});

function disabledButtons (current) {
    if (current == 0) {
    $btn.disabled = true;
    $enemyButton.disabled = true;
    $randomButton.disabled = true;
    }
}

function generateLog (player1,player2, count) {

    const {name, hp: {current, total} } = player1;
    const {name: namePlayer2} = player2;

const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${namePlayer2}, не помня себя от испуга, ударил в предплечье врага. — Нанесено урона -${count} XP [ ${current} / ${total} ] ]` ,
    `${name}, и за это ${namePlayer2} с испугу приложил прямой удар коленом в лоб врага. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} забылся, но в это время наглый ${namePlayer2}, приняв волевое решение, неслышно подойдя сзади, ударил. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пришел в себя, но неожиданно ${namePlayer2} случайно нанес мощнейший удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} поперхнулся, но в это время ${namePlayer2} нехотя раздробил кулаком \<вырезанно цензурой\> противника. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} удивился, а ${namePlayer2} пошатнувшись влепил подлый удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} высморкался, но неожиданно ${namePlayer2} провел дробящий удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пошатнулся, и внезапно наглый ${namePlayer2} беспричинно ударил в ногу противника  — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} расстроился, как вдруг, неожиданно ${namePlayer2} случайно влепил стопой в живот соперника. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${namePlayer2} со скуки, разбил бровь сопернику.  — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
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



