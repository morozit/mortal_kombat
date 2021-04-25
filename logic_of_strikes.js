import { refs } from "./Refs.js"
import { game } from "./main.js";
// import { /*getRandom,*/ $formFight } from "./main.js";

import { obj_PLAYER_1, obj_PLAYER_2 } from "./Player.js";
// import 
// { obj_PLAYER, 
//   obj_PLAYER_1, 
//   obj_PLAYER_2, 
//   obj_PLAYER_3, 
//   changeHP, 
//   elHP, 
//   renderHP} 
//   from "./obj_player.js";

  import { generateLog } from "./logs.js";
// !!!! ЛОГИКА нанесенния ударов ----------------
export function logicStrikes (pA1, pA2) {
  obj_PLAYER_1.kick = pA1.value;
  obj_PLAYER_2.kick = pA2.value;

  if (pA1.hit !== pA2.defence) {
    obj_PLAYER_2.changeHP(pA1.value);
    obj_PLAYER_2.renderHP();
    generateLog('hit', obj_PLAYER_1, obj_PLAYER_2);
  } else {
    generateLog('defence', obj_PLAYER_1, obj_PLAYER_2);
  }

  if (pA2.hit !== pA1.defence) {
    obj_PLAYER_1.changeHP(pA2.value);
    obj_PLAYER_1.renderHP();
    generateLog('hit', obj_PLAYER_2, obj_PLAYER_1);
  } else {
    generateLog('defence', obj_PLAYER_2, obj_PLAYER_1);
  } 
}

// !!! куда бьет пк
export function enemyAttack() {
  let hit = OPPONENT[game.getRandom(3) - 1];
  let defence = OPPONENT[game.getRandom(3) - 1];

  return {
    value: game.getRandom(randPowerHit[hit]),
    hit,
    defence,  
  }
}

// !!!! ----------------------------------------
export function playerAttack() {

  const attack = {};
  for (const item of refs.$formFight) {
    

    if (item.checked && item.name === 'hit') {
      attack.value = game.getRandom(randPowerHit[item.value]);
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

// Цифры для генерации случайного удара
const randPowerHit = {
  head: 30,
  body: 25,
  foot: 20,
}

// для генерации АТАК и ЗАЩИТЫ стороны противника (пк)
const OPPONENT = ['head', 'body', 'foot'];