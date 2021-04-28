import { Game } from "./Game.js";
import  Player  from "./Player.js";
import { playerIcon } from "./constant.js";
// import { logicStrikes, enemyAttack, playerAttack} from "./logic_of_strikes.js";

const PLAYERS = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players')
  .then(responce => {
    return responce.json();
  })
  .then(data => {
    console.log(data);
  })
  ;


console.log(PLAYERS);

export const obj_PLAYER_1 = new Player({
  player : 1,
  name : 'KITANA',
  img : playerIcon.kitana,
  hp : 100,
  kick : 0,
  color : '#42DDF5',
  rootSelector: 'arenas',
} );

export const obj_PLAYER_2 = new Player({
  player : 2,
  name : 'SONYA',
  img : playerIcon.sonya,
  hp : 100,
  kick : 0,
  color : '#FFFF00',
  rootSelector: 'arenas',
} );

// ----------------DOM---------------------------
export const $arenas = document.querySelector('.arenas');
export const $fightButton = document.querySelector('.button');
export const $formFight = document.querySelector('.control');
export const $chat = document.querySelector('.chat');


const game = new Game({
  player_1: obj_PLAYER_1.createPlayer(),
  player_2: obj_PLAYER_2.createPlayer(),
});
game.start();


$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let obj_enemyAttack = game.enemyAttack();
  let obj_playerAttack = game.playerAttack();
  
  game.logicStrikes(obj_playerAttack, obj_enemyAttack);
  
  game.outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);
});