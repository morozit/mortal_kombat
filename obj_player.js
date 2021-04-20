import { playerIcon } from "./playerIcon.js";
import { changeHP, renderHP, elHP } from "./object_method.js";

export const obj_PLAYER = {
  player: 0,
  name: '',
  hp: 100,
  img: playerIcon.name,
  changeHP,
  renderHP,
  elHP,
  attack: 0,
};

export const obj_PLAYER_1 = {
  player: 1,
  name: 'sonya',
  hp: 100,
  img: playerIcon.sonya,
  changeHP,
  renderHP,
  elHP,
  kick: 0,
};

export const obj_PLAYER_2 = {
  player: 2,
  name: 'orco',
  hp: 100,
  img: playerIcon.orco,
  weapon: ['трезубец'],
  changeHP,
  renderHP,
  elHP,
  kick: 0,
};

export const obj_PLAYER_3 = Object.create(obj_PLAYER);
  
