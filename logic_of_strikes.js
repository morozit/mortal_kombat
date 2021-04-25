// import { $formFight } from "./main.js";
// import { getRandom } from "./utils.js";
// import { randPowerHit, OPPONENT } from "./constans.js";
// // import { generateLog } from "./logs.js";

// import { obj_PLAYER_1, obj_PLAYER_2 } from "./main.js";

// // !!!! ЛОГИКА нанесенния ударов ----------------
// export function logicStrikes (pA1, pA2) {
//   obj_PLAYER_1.kick = pA1.value;
//   obj_PLAYER_2.kick = pA2.value;

//   if (pA1.hit !== pA2.defence) {
//     obj_PLAYER_2.changeHP(pA1.value);
//     obj_PLAYER_2.renderHP();
//     game.generateLog('hit', obj_PLAYER_1, obj_PLAYER_2);
//   } else {
//     generateLog('defence', obj_PLAYER_1, obj_PLAYER_2);
//   }

//   if (pA2.hit !== pA1.defence) {
//     obj_PLAYER_1.changeHP(pA2.value);
//     obj_PLAYER_1.renderHP();
//     generateLog('hit', obj_PLAYER_2, obj_PLAYER_1);
//   } else {
//     generateLog('defence', obj_PLAYER_2, obj_PLAYER_1);
//   } 
// }

// // !!! куда бьет пк
// export function enemyAttack() {
//   let hit = OPPONENT[getRandom(3) - 1];
//   let defence = OPPONENT[getRandom(3) - 1];

//   return {
//     value: getRandom(randPowerHit[hit]),
//     hit,
//     defence,  
//   }
// }

// // !!!! ----------------------------------------
// export function playerAttack() {

//   const attack = {};
//   for (const item of $formFight) {
    

//     if (item.checked && item.name === 'hit') {
//       attack.value = getRandom(randPowerHit[item.value]);
//       attack.hit = item.value;
//     }
    
//     if (item.checked && item.name === 'defence') {
//       attack.defence = item.value;
//     }
//     // !!!!!!!!! ВКЛЮЧИТЬ  !!!!!!
//     // item.checked = false;
//   }
//   return attack;
// }

