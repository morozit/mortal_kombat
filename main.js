import { Game } from "./Game.js";
import Player from "./Player.js";
import { $arenas, $fightButton, $formFight, $chat } from "./DOM.js";
import  REQUEST from "./FetchAPI.js";


// const request = new REQUEST();

// request.getPlayers();
// console.log(request.start());

// export const obj_PLAYER_1 = new Player({
//   player : 1,
//   name : 'KITANA',
//   img : playerIcon.kitana,
//   hp : 100,
//   kick : 0,
//   color : '#42DDF5',
//   rootSelector: 'arenas',
// } );

// export const obj_PLAYER_2 = new Player({
//   player: 2,
//   name: 'SONYA',
//   img: playerIcon.sonya,
//   hp: 100,
//   kick: 0,
//   color: '#FFFF00',
//   rootSelector: 'arenas',
// } );


// console.log(obj_PLAYER_1, obj_PLAYER_2);

// const game = new Game({
//   player_1: obj_PLAYER_1.createPlayer(),
//   player_2: obj_PLAYER_2.createPlayer(),
// });
const game = new Game()
game.start();


$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  // let obj_enemyAttack = game.enemyAttack();
  // let obj_playerAttack = game.playerAttack();

  let obj_enemyAttack = REQUEST.getFightStats(game.enemyAttack());
  let obj_playerAttack = REQUEST.getFightStats( game.playerAttack());
  console.log(obj_playerAttack);
  game.logicStrikes(obj_playerAttack, obj_enemyAttack);
  
  game.outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);
});