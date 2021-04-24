import { playerIcon } from "./playerIcon.js";
export class Player {
  constructor( props ) {
    this.player = props.player;
    this.name = props.name;
    this.img = props.img;
    this.hp = props.hp;
    this.kick = props.kick;
    this.color = props.color;
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
}

export const obj_PLAYER_1 = new Player({
  player : 1,
  name : 'KITANA',
  img : playerIcon.kitana,
  hp : 100,
  kick : 0,
  color : '#42DDF5',
} );

export const obj_PLAYER_2 = new Player({
  player : 2,
  name : 'SONYA',
  img : playerIcon.sonya,
  hp : 100,
  kick : 0,
  color : '#FFFF00',
} );