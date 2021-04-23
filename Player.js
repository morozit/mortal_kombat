class Player {
  constructor(player, name, hp, img, kick, color/*, changeHP, renderHP, elHP*/) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.kick = kick;
    this.color = color;
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
    console.log();
    return this.name
  }
}