import { obj_PLAYER_1, obj_PLAYER_2 } from "./Player.js";

import { logicStrikes, enemyAttack, playerAttack} from "./logic_of_strikes.js";
import { generateLog } from "./logs.js";

export const $arenas = document.querySelector('.arenas');
export const $fightButton = document.querySelector('.button');
export const $formFight = document.querySelector('.control');
export const $chat = document.querySelector('.chat');

export class Game {


// !!!! Старт боя ---------------------------
  getRandom = (num) => {
    return Math.ceil(Math.random() * num);
  }


  // start = () => {
  //   return createStartButton();
  // }



  // !!! Кнопка Старта ---------------------
  createStartButton = () => {
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
  
  $formFight.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    let obj_enemyAttack = enemyAttack();
    let obj_playerAttack = playerAttack();
    
    logicStrikes(obj_playerAttack, obj_enemyAttack);

    outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);

    // !!!! рестарт боя-----------------------------
const createReloadButton = () => {
  let $reloadBtnDiv = createElement('div', 'reloadWrap');
  let $reloadBtn = createElement('button', 'button');
  $reloadBtn.innerHTML = 'Reload';
  $reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
  $reloadBtnDiv.appendChild($reloadBtn);
  $arenas.appendChild($reloadBtnDiv);
}

// !!!! создание елементов
function createElement (tag, className) {
  let $tag = document.createElement(tag);
  $tag.classList.add(className);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

createPlayer = (data) => {
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

// !!!! TITLE ------------------------------
outputWinPlayerTitle = (p1, p2) => {
  if (p1.hp === 0 || p2.hp === 0) {

    if (p1.hp === 0 && p1.hp < p2.hp) {
      $arenas.appendChild(createWinPlayerTitle(p2.name));
      generateLog('end', p2, p1);
    } else if (p2.hp === 0 && p1.hp > p2.hp)  {
      $arenas.appendChild(createWinPlayerTitle(p1.name));
      generateLog('end', p1,p_2);
    } else if  (p1.hp === 0 && p2.hp === 0) {
      $arenas.appendChild(createWinPlayerTitle());
      generateLog('draw');
    }
    $fightButton.disabled = true;
    $formFight.remove();
    createReloadButton(); 
  }
  
}

createWinPlayerTitle = (name) => {
  let $winTitle = createElement('div', 'winTitle');
  if (name) {
    $winTitle.innerHTML = `${name} wins!!!`;
  } else {
    $winTitle.innerHTML = `draw`;
  }
  return $winTitle;
}
  });

} 

}

export const getRandom = (num) => {
  return Math.ceil(Math.random() * num);
}