
import { obj_PLAYER, obj_PLAYER_1, obj_PLAYER_2, obj_PLAYER_3 } from "./obj_player.js";

import { logs } from "./logs.js";

// ----------------DOM---------------------------
const $arenas = document.querySelector('.arenas');
const $fightButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

// Цифри для генерації випадкового удару
const randPowerHit = {
  head: 30,
  body: 25,
  foot: 20,
}

// для генерації АТАК та ЗАХИСТУ сторони противника (пк)
const OPPONENT = ['head', 'body', 'foot'];


// const obj_PLAYER_1 = {
//   player: 1,
//   name: 'sonya',
//   hp: 100,
//   img: playerIcon.sonya,
//   weapon: ['катана'],
//   changeHP,
//   renderHP,
//   elHP,
// };

// const obj_PLAYER_2 = {
//   player: 2,
//   name: 'orco',
//   hp: 100,
//   img: playerIcon.orco,
//   weapon: ['трезубец'],
//   changeHP,
//   renderHP,
//   elHP,
// };

// --------------Function-------------------------

function createElement (tag, className) {
  let $tag = document.createElement(tag);
  $tag.classList.add(className);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(data) {
  // ! createElement
  let $player = createElement('div', `player${data.player}`);
  let $progressbar = createElement('div', 'progressbar');
  let $life = createElement('div', 'life');
  let $name = createElement('div', 'name');
  let $character = createElement('div', 'character');
  let $img = createElement('img');
  
  // !!! style
  $life.style.width = `${data.hp}%`;
    
  // !!!! inerHTML
  $name.innerHTML = data.name;
  $img.src = data.img;

  // !!!add pers
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  
  $character.appendChild($img);

  $player.appendChild($character);
  $player.appendChild($progressbar);

  return $player;
}


// // !!!!  HP ---------------------------
// function changeHP(lostLife) {
//   this.hp -= lostLife;
//   if (this.hp <= 0) {
//     this.hp = 0;
//   }
//     this === obj_PLAYER_2 
//       ? generateLog('hit', obj_PLAYER_2, obj_PLAYER_1, lostLife, obj_PLAYER_2.hp) 
//       : generateLog('hit', obj_PLAYER_1, obj_PLAYER_2, lostLife, obj_PLAYER_1.hp)
  
//   return this.hp;
// }

// function elHP() {
//   let $playerLife = document.querySelector(`.player${this.player} .life`);
//   return $playerLife;
// } 

// function renderHP() {
//   this.elHP().style.width = `${this.hp}%`
//   console.log();
//   return this.name
// }

function getRandom (num) {
  return Math.ceil(Math.random() * num);
}
// !!! -------------------------------------

// !!!! TITLE ------------------------------
function outputWinPlayerTitle (p1, p2) {
  if (p1.hp === 0 || p2.hp === 0) {

    if (p1.hp === 0 && p1.hp < p2.hp) {
      $arenas.appendChild(createWinPlayerTitle(p2.name));
      generateLog('end', obj_PLAYER_2, obj_PLAYER_1);
    } else if (p2.hp === 0 && p1.hp > p2.hp)  {
      $arenas.appendChild(createWinPlayerTitle(p1.name));
      generateLog('end', obj_PLAYER_1, obj_PLAYER_2);
    } else if  (p1.hp === 0 && p2.hp === 0) {
      $arenas.appendChild(createWinPlayerTitle());
      generateLog('draw');
    }
    $fightButton.disabled = true;
    $formFight.remove();
    createReloadButton(); 
  }
  
}
// !!!!  ----------------------------------------------
function createWinPlayerTitle(name) {
  let $winTitle = createElement('div', 'winTitle');
  if (name) {
    $winTitle.innerHTML = `${name} wins!!!`;
  } else {
    $winTitle.innerHTML = `draw`;
  }
  return $winTitle;
}

// !!!! -----------CHAT--------------------------
function generateLog (type, plKick, plDefence) {
  let textLog = '';
  let timeNow = new Date().toTimeString().replace(/ .*/, '');
  switch (type) {

    case 'start':
      textLog = logs.start
        .replace('[time]', `<span style='font-weight: bold;'>[${timeNow}]</span>`)
        .replace('[player1]', plKick.name)
        .replace('[player2]', plDefence.name);
      break;
    // ? switch hit = [head, body, food]   
    case 'hit': 
      textLog = 
        `<span style='font-weight: bold;'>[${timeNow}]</span> ${logs[type][getRandom(logs[type].length) - 1]
        .replace('[playerKick]', plKick.name)
        .replace('[playerDefence]', plDefence.name)}, <span style='color: #cd0e03; font-weight: bold;'>-${plKick.kick}</span> жизни  [${plDefence.hp} / 100]`;
      break;

    case 'defence': 
      textLog = 
        `<span style='font-weight: bold;'>[${timeNow}]</span> ${logs[type][getRandom(logs[type].length) - 1]
        .replace('[playerKick]', plKick.name)
        .replace('[playerDefence]', plDefence.name)} <span style='color: #00d600; font-weight: bold;'>-0</span> жизни  [${plKick.hp} / 100]`;
      break;
    
    case 'end':
      textLog = `<span style='font-weight: bold;'>[${timeNow}]</span> ${logs[type][getRandom(logs[type].length) - 1].replace('[playerWins]', plKick.name)
      .replace('[playerLose]', plDefence.name)}`;
      break;

    case 'draw':
      textLog = `<span style='font-weight: bold;'>[${timeNow}]</span> ${logs[type]}`
      break;

    default: 
  }


  // console.log(textLog);
  let el = `<p>${textLog}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}


// !!!! ЛОГИКА нанесенния ударов ----------------
function logicStrikes (pA1, pA2) {
  obj_PLAYER_1.kick = pA1.value;
  obj_PLAYER_2.kick = pA2.value;
  if (pA1.hit !== pA2.defence) {
    obj_PLAYER_2.changeHP(pA1.value);
    obj_PLAYER_2.renderHP();
    generateLog('hit', obj_PLAYER_2, obj_PLAYER_1)ж
  } else {
    generateLog('defence', obj_PLAYER_1, obj_PLAYER_2);
  }

  if (pA2.hit !== pA1.defence) {
    obj_PLAYER_1.changeHP(pA2.value);
    obj_PLAYER_1.renderHP();
    generateLog('hit', obj_PLAYER_1, obj_PLAYER_2)ж
  } else {
    generateLog('defence', obj_PLAYER_2, obj_PLAYER_1);
  } 
}

// !!! куда бьет пк
function enemyAttack() {
  let hit = OPPONENT[getRandom(3) - 1];
  let defence = OPPONENT[getRandom(3) - 1];

  return {
    value: getRandom(randPowerHit[hit]),
    hit,
    defence,  
  }
}

// !!!! ----------------------------------------
function playerAttack() {

  const attack = {};
  for (const item of $formFight) {
    

    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(randPowerHit[item.value]);
      attack.hit = item.value;
    }
    
    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    // !!!!!!!!! ВКЛЮЧИТЬ  !!!!!!
    // item.checked = false;
  }
  return attack;
}


// !!!! Старт боя ---------------------------
function createStartButton() {
  $formFight.style.display = "none";
  let $startBtnDiv = createElement('div', 'startWrap');
  let $startBtn = createElement('button', 'button');
  $startBtn.innerHTML = 'Start';

  $startBtnDiv.appendChild($startBtn);
  $arenas.appendChild($startBtnDiv);
  $startBtn.addEventListener('click', () => {
    $startBtnDiv.style.display = "none";
    $formFight.style.display = '';
    generateLog('start', obj_PLAYER_1, obj_PLAYER_2);
  });
  // function IIFE
} createStartButton();
// createStartButton();



// !!!! рестарт боя-----------------------------
function createReloadButton() {
  let $reloadBtnDiv = createElement('div', 'reloadWrap');
  let $reloadBtn = createElement('button', 'button');
  $reloadBtn.innerHTML = 'Reload';
  $reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
  $reloadBtnDiv.appendChild($reloadBtn);
  $arenas.appendChild($reloadBtnDiv);
}

// !!!-------------------------------------------

$arenas.appendChild(createPlayer(obj_PLAYER_1));
$arenas.appendChild(createPlayer(obj_PLAYER_2));

$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let obj_enemyAttack = enemyAttack();
  let obj_playerAttack = playerAttack();
  


  logicStrikes(obj_playerAttack, obj_enemyAttack);
  
  // logicStrikes(obj_PLAYER_2, obj_playerAttack.hit, obj_enemyAttack.defence,  obj_playerAttack.value);
  // logicStrikes(obj_PLAYER_1, obj_enemyAttack.hit, obj_playerAttack.defence, obj_enemyAttack.value);

  outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);

  console.log(`${obj_PLAYER_1.name} ${obj_PLAYER_1.hp}-♥`, obj_playerAttack);
  console.log(`${obj_PLAYER_2.name} ${obj_PLAYER_2.hp}-♥`, obj_enemyAttack);
});