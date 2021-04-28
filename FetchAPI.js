import { Game } from "./Game.js";
// import { obj_PLAYER_1, obj_PLAYER_2 } from "./main.js";
import { $arenas, $fightButton, $formFight, $chat } from "./DOM.js";
import Player from "./Player.js";

class  REQUEST{
  constructor() {
    this.baseUrl = "https://reactmarathon-api.herokuapp.com/api/mk";
  }

  getPlayers = async () => {
    let body = fetch(`${this.baseUrl}/players`)
      .then((response) => response.json());
    return body;
  }

  start = async () => {
    $formFight.style.display = "none";
    this.createStartButton();
    // --
    const players = await this.getPlayers();
    console.log(players);

    const p1 = players[getRandom(players.length) - 1];
    const p2 = players[getRandom(players.length) - 1];
    console.log(p1, p2);
  }

  // async getAllPlayers() {
  //   console.log(getAllPlayers());
  //   return await fetch(`${this.baseUrl}/players`).then((response) =>
  //     response.json());
    
  // }
  // console.log(getAllPlayers());



  // async getEnemyPlayer() {
  //   return await fetch(`${this.baseUrl}/player/choose`)
  //     .then((response) =>
  //         response.json()
  //     )
  //     .catch(error => console.error(error.message));
  // }
  // async getFightStats(payload) {
  //   return await fetch(`${this.baseUrl}/player/fight`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       hit: payload.hit,
  //       defence: payload.defence,
  //     }),
  //   }).then((response) => response.json());
  // }
}

// export default REQUEST;


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
//   player : 2,
//   name : 'SONYA',
//   img : playerIcon.sonya,
//   hp : 100,
//   kick : 0,
//   color : '#FFFF00',
//   rootSelector: 'arenas',
// } );


// export const game = new Game({
//   player_1: obj_PLAYER_1.createPlayer(),
//   player_2: obj_PLAYER_2.createPlayer(),
// });

// game.start();