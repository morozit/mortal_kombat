
import { obj_PLAYER_1, obj_PLAYER_2 } from "./Player.js";
import { logicStrikes, enemyAttack, playerAttack} from "./logic_of_strikes.js";
import { generateLog } from "./logs.js";
import { refs } from "./Refs.js"

// export const $arenas = document.querySelector('.arenas');
// export const $fightButton = document.querySelector('.button');
// export const $formFight = document.querySelector('.control');
// export const $chat = document.querySelector('.chat');
// const refs = new Refs();


export class Game {

  getRandom = (num) => {
    return Math.ceil(Math.random() * num);
  }

// !!!! Старт боя ---------------------------
  // start = () => {
  //   return createStartButton();
  // }

 // !!! Кнопка Старта ---------------------
  createStartButton = () => {
  refs.$arenas.appendChild(refs.createPlayer(obj_PLAYER_1));
  refs.$arenas.appendChild(refs.createPlayer(obj_PLAYER_2));
    
  refs.$formFight.style.display = "none";

  refs.$startBtn.innerHTML = 'Start';
  refs.$startBtnDiv.appendChild(refs.$startBtn);
  refs.$arenas.appendChild(refs.$startBtnDiv);
  // let paintingPl_1 = this.createPlayer(obj_PLAYER_1);

  // let paintingPl_2 = createPlayer(obj_PLAYER_2);

  // refs.$arenas.appendChild(paintingPl_1);
  // refs.$arenas.appendChild(paintingPl_2);



  refs.$startBtn.addEventListener('click', () => {
    refs.$startBtnDiv.style.display = "none";
    refs.$formFight.style.display = '';

  
    generateLog('start', obj_PLAYER_1, obj_PLAYER_2);
  });
  

  refs.$formFight.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    let obj_enemyAttack = enemyAttack();
    let obj_playerAttack = playerAttack();
    
    logicStrikes(obj_playerAttack, obj_enemyAttack);

    refs.outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);
    // outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);
  });


    // !!!! рестарт боя-----------------------------
const createReloadButton = () => {
  // let $reloadBtnDiv = createElement('div', 'reloadWrap');
  // let $reloadBtn = createElement('button', 'button');
  refs.$reloadBtn.innerHTML = 'Reload';
  refs.$reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
  refs.$reloadBtnDiv.appendChild($reloadBtn);
  refs.$arenas.appendChild($reloadBtnDiv);
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

// createPlayer = (data) => {
//   // ! createElement
//   // let $player = createElement('div', `player${data.player}`);
//   // let $progressbar = createElement('div', 'progressbar');
//   // let $life = createElement('div', 'life');
//   // let $name = createElement('div', 'name');
//   // let $character = createElement('div', 'character');
//   // let $img = createElement('img');
//   refs.$player = refs.createElement('div', `player${data.player}`),
//   // !!! style
//   refs.$life.style.width = `${data.hp}%`;
    
//   // !!!! inerHTML
//   refs.$name.innerHTML = data.name;
//   refs.$img.src = data.img;

//   // !!!add pers
//   refs.$progressbar.appendChild(refs.$life);
//   refs.$progressbar.appendChild(refs.$name);
  
//   refs.$character.appendChild(refs.$img);

//   refs.$player.appendChild(refs.$character);
//   refs.$player.appendChild(refs.$progressbar);

//   return refs.$player;
// }

// !!!! TITLE ------------------------------
  refs.outputWinPlayerTitle = (p1, p2) => {
    if (p1.hp === 0 || p2.hp === 0) {

      if (p1.hp === 0 && p1.hp < p2.hp) {
         $arenas.appendChild(refs.createWinPlayerTitle(p2.name));
        generateLog('end', p2, p1);
      } else if (p2.hp === 0 && p1.hp > p2.hp)  {
        $arenas.appendChild(refs.createWinPlayerTitle(p1.name));
        generateLog('end', p1,p_2);
      } else if  (p1.hp === 0 && p2.hp === 0) {
        $arenas.appendChild(refs.createWinPlayerTitle());
        generateLog('draw');
      }
      $fightButton.disabled = true;
      $formFight.remove();
      createReloadButton(); 
    }
    
  }

  refs.createWinPlayerTitle = (name) => {
    if (name) {
      refs.$winTitle.innerHTML = `${name} wins!!!`;
    } else {
      refs.$winTitle.innerHTML = `draw`;
    }
    return $winTitle;
  }
  

} 

}

// export const getRandom = (num) => {
//   return Math.ceil(Math.random() * num);
// }

// console.log(Game);