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

// function getRandom (num) {
//   return Math.ceil(Math.random() * num);
// }