import { createElement } from "./utils.js";

class Player {
  constructor( props ) {
    this.player = props.player;
    this.name = props.name;
    this.img = props.img;
    this.hp = props.hp;
    this.kick = props.kick;
    this.color = props.color;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
    this.baseUrl = "https://reactmarathon-api.herokuapp.com/api/mk";

  }

  getPlayers = async () => {
    let body = fetch(`${this.baseUrl}/players`)
      .then((response) => response.json());
    return body;
  }

  serverPlayer = async () => {
    const players = await this.getPlayers();
    console.log(players);

    this.serverPlayer = players[getRandom(players.length) - 1];
    // return this.serverPlayer;
  }

  changeHP = (lostLife) => {
    this.hp -= lostLife;
    if (this.hp <= 0) {
      this.hp = 0;
    }
    return this.hp;
  }

  elHP = () => {
    let $playerLife = document.querySelector(`.player${this.player} .life`);
    return $playerLife;
  }

  renderHP = () => {
    this.elHP().style.width = `${this.hp}%`;
  }

  createPlayer = () => {
    // ! createElement
    let $player = createElement('div', this.selector);
    let $progressbar = createElement('div', 'progressbar');
    let $life = createElement('div', 'life');
    let $name = createElement('div', 'name');
    let $character = createElement('div', 'character');
    let $img = createElement('img');
    
    // !!! style
    $life.style.width = `${this.hp}%`;
      
    // !!!! inerHTML
    $name.innerHTML = this.name;
    $img.src = this.img;

    // !!!add pers
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);

    $player.appendChild($character);
    $player.appendChild($progressbar);

    const $root = document.querySelector(`.${this.rootSelector}`);
    $root.appendChild($player);

    return $player;
  }
}

export default Player;

  // constructor() {
  //   this.baseUrl = "https://reactmarathon-api.herokuapp.com/api/mk";
  // }

  // getPlayers = async () => {
  //   let body = fetch(`${this.baseUrl}/player/choose`)
  //     .then((response) => response.json());
  //   return body;
  // }