import { playerIcon } from "./playerIcon.js";

export const obj_PLAYER = {
  player: 0,
  name: 'liukang',
  hp: 100,
  // color: {
    // colorText: '#5E00FF',
    // colorName: `<span style='color: ${obj_PLAYER.color.colorText}; font-weight: bold;'>-${obj_PLAYER.name}</span>`,
    // colorHp: `<span style='color: ${obj_PLAYER.color.colorText}; font-weight: bold;'>-${obj_PLAYER.hp}</span>`,
  // },
  img: playerIcon.liukang,
  changeHP,
  renderHP,
  elHP,
  attack: 0,
};


export const obj_PLAYER_1 = {
  player: 1,
  name: 'SONYA',
  hp: 100,
  img: playerIcon.sonya,
  kick: 0,
  color: '#42DDF5',
  changeHP,
  renderHP,
  elHP,
};

export const obj_PLAYER_2 = {
  player: 2,
  name: 'ORCO',
  hp: 100,
  img: playerIcon.orco,
  kick: 0,
  color: '#FFFF00',
  changeHP,
  renderHP,
  elHP,
};


// деструктуризация
const {
  player: firstPlayer, 
  name: nameFirstPlayer, 
  hp: hpFirstPlayer,
  img: imgFirstPlayer,
  kick: kickFirstPlayer,
  color: colorFirstPlayer,} = obj_PLAYER_1;

const {
  player: secondPlayer, 
  name: namesecondPlayer, 
  hp: hpsecondPlayer,
  img: imgsecondPlayer,
  kick: kicksecondPlayer,
  color: colorsecondPlayer,} = obj_PLAYER_2;


// прототип Object
export const obj_PLAYER_3 = Object.create(obj_PLAYER);
  
// !!!!  HP ---------------------------
export function changeHP(lostLife) {
  this.hp -= lostLife;
  if (this.hp <= 0) {
    this.hp = 0;
  }

  return this.hp;
}

export function elHP() {
  let $playerLife = document.querySelector(`.player${this.player} .life`);
  return $playerLife;
} 

export function renderHP() {
  this.elHP().style.width = `${this.hp}%`
  console.log();
  return this.name
}