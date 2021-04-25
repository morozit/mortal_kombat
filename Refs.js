import { obj_PLAYER_1, obj_PLAYER_2 } from "./Player.js";
export class Refs {
  constructor ( props ) {

  this.$arenas = props.$arenas;
  this.$fightButton = props.$fightButton;
  this.$formFight = props.$formFight;
  this.$chat = props.$chat;

  this.$player = props.$player;
  this.$progressbar =  props.$progressbar;
  this.$life =  props.$life;
  this.$name =  props.$name;
  this.$character =  props.$character;
  this.$img =  props.$img;

// !!! Кнопка Старта ---------------------
  this.$startBtnDiv =  props.$startBtnDiv;
  this.$startBtn =  props.$startBtn;
// !!! Кнопка Перезагрузить---------------------
  this.$reloadBtnDiv =  props.$reloadBtnDiv;
  this.$reloadBtn =  props.$reloadBtn;
// !!! Title победителя
  this.$winTitle =  props.$winTitle;

  }

  createElement (tag, className) {
    let $tag = document.createElement(tag);
    $tag.classList.add(className);
    if (className) {
      $tag.classList.add(className);
    }

    return $tag;
  }

  createPlayer = (data) => {
    // ! createElement
    // let $player = createElement('div', `player${data.player}`);
    // let $progressbar = createElement('div', 'progressbar');
    // let $life = createElement('div', 'life');
    // let $name = createElement('div', 'name');
    // let $character = createElement('div', 'character');
    // let $img = createElement('img');
    refs.$player = this.createElement('div', `player${data.player}`),  //!!!!
    // !!! style
    refs.$life.style.width = `${data.hp}%`;
      
    // !!!! inerHTML
    refs.$name.innerHTML = data.name;
    refs.$img.src = data.img;

    // !!!add pers
    refs.$progressbar.appendChild(refs.$life);
    refs.$progressbar.appendChild(refs.$name);
    
    refs.$character.appendChild(refs.$img);

    refs.$player.appendChild(refs.$character);
    refs.$player.appendChild(refs.$progressbar);

    return refs.$player;
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
    if (name) {
      refs.$winTitle.innerHTML = `${name} wins!!!`;
    } else {
      refs.$winTitle.innerHTML = `draw`;
    }
    return $winTitle;
  }
}

console.log(Refs);


export const refs = new Refs({
  $arenas: document.querySelector('.arenas'),
  $fightButton: document.querySelector('.button'),
  $formFight: document.querySelector('.control'),
  $chat: document.querySelector('.chat'),
});

refs.$progressbar = refs.createElement('div', 'progressbar'),
refs.$life = refs.createElement('div', 'life'),
refs.$name = refs.createElement('div', 'name'),
refs.$character = refs.createElement('div', 'character'),
refs.$img = refs.createElement('img'),

// !!! Кнопка Старта ---------------------
refs.$startBtnDiv = refs.createElement('div', 'startWrap'),
refs.$startBtn = refs.createElement('button', 'button'),
// !!! Кнопка Перезагрузить---------------------
refs.$reloadBtnDiv = refs.createElement('div', 'reloadWrap'),
refs.$reloadBtn = refs.createElement('button', 'button'),
// !!! Title победителя
refs.$winTitle = refs.createElement('div', 'winTitle'),



console.log(refs);