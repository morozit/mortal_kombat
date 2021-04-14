// ----------------DOM---------------------------
const $arenas = document.querySelector('.arenas');
const $fightButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

// ----------------Object------------------------
const playerIcon = {
  scorpion: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  kitana: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  liukang: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  sonya: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  subzero: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  orco: 'https://www.fightersgeneration.com/nx/chars/kintaro-arcadestance.gif',
};

// Цифри для генерації випадкового удару
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

// для генерації АТАК та ЗАХИСТУ сторони противника (пк)
const OPPONENT = ['head', 'body', 'foot'];


const obj_PLAYER_1 = {
  player: 1,
  name: 'sonya',
  hp: 100,
  img: playerIcon.sonya,
  weapon: ['катана'],
  changeHP,
  renderHP,
  elHP,
  attack: () => {
    return console.log(`${obj_PLAYER_1.name} Fight...`);
  },
};

const obj_PLAYER_2 = {
  player: 2,
  name: 'orco',
  hp: 100,
  img: playerIcon.orco,
  weapon: ['трезубец'],
  changeHP,
  renderHP,
  elHP,
  attack: () => {
    return console.log(`${obj_PLAYER_2.name} Fight...`);
  },
};

// --------------Function-------------------------

function createElement (tag, className) {
  let $tag = document.createElement(tag);
  $tag.classList.add(className);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(data) {
  // ! createElement
  let $player = createElement('div', `player${data.player}`);
  let $progressbar = createElement('div', 'progressbar');
  let $life = createElement('div', 'life');
  let $name = createElement('div', 'name');
  let $character = createElement('div', 'character');
  let $img = createElement('img');
  
  // !!! style
  $life.style.width = `${data.hp}%`;
    
  // !!!! inerHTML
  $name.innerHTML = data.name;
  $img.src = data.img;

  // !!! appendChild
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  
  $character.appendChild($img);

  $player.appendChild($character);
  $player.appendChild($progressbar);

  return $player;
}

function changeHP(lostLife) {
  console.log(`%c${this.name} -${lostLife}hp`, 'color: #ffffff; background-color: #CD0E03; padding: 4px 50px; font-size: 12px;');

  this.hp -= lostLife;
  if (this.hp <= 0) {
    this.hp = 0;
  }


  console.log(`%c${this.name} ${this.hp}-♥`, 'color: #ffffff; background-color: #4CAF50; padding: 4px 50px; font-size: 12px;');
}

function elHP() {
  let $playerLife = document.querySelector(`.player${this.player} .life`);
  return $playerLife;
} 

function renderHP() {
  this.elHP().style.width = `${this.hp}%`
  console.log();
  return this.name
}

function getRandom (num) {
  return Math.ceil(Math.random() * num);
}

function createWinPlayerTitle(name) {
  let $winTitle = createElement('div', 'winTitle');
if (name) {
  $winTitle.innerHTML = `${name} wins!!!`;
} else {
  $winTitle.innerHTML = `draw`;
}

  return $winTitle;
}

function createReloadButton() {
  let $reloadBtnDiv = createElement('div', 'reloadWrap');
  let $reloadBtn = createElement('button', 'button');
  $reloadBtn.innerHTML = 'Reload';
  $reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
  $reloadBtnDiv.appendChild($reloadBtn);
  $arenas.appendChild($reloadBtnDiv);
}

$arenas.appendChild(createPlayer(obj_PLAYER_1));
$arenas.appendChild(createPlayer(obj_PLAYER_2));

// !!! куда бє компютер
function enemyAttack() {
  let hit = OPPONENT[getRandom(3) - 1];
  let defence = OPPONENT[getRandom(3) - 1];

  // console.log('###: hit', hit);
  // console.log('###: defence', defence);
  return {
    // value на скільки вдарив ворог
    value: getRandom(HIT[hit]),
    // hit, defence частини тіла які атакyє і захищає ПК
    hit,
    defence,  
  }
}


// !!! куди бє гравець
$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();
  // console.dir($formFight);
  let obj_enemyAttack = enemyAttack();
  let obj_playerAttack = {};



  
  for (const item of $formFight) {

    if (item.checked && item.name === 'hit') {
      obj_playerAttack.value = getRandom(HIT[item.value]);
      obj_playerAttack.hit = item.value;
    }
    
    if (item.checked && item.name === 'defence') {
      obj_playerAttack.defence = item.value;
    }
    // item.checked = false;
  }
  console.log('### obj_enemyAttack', obj_enemyAttack.value);
  console.log('### obj_playerAttack', obj_playerAttack.value);

  obj_PLAYER_1.changeHP(obj_enemyAttack.value);
  obj_PLAYER_2.changeHP(obj_playerAttack.value);
  obj_PLAYER_1.renderHP();
  obj_PLAYER_2.renderHP();



  // !!!!!! marking the end of the battle   &   remove form
  if (obj_PLAYER_1.hp === 0 || obj_PLAYER_2.hp === 0) {
    $fightButton.disabled = true;
    $formFight.remove();
    createReloadButton();
  }
  // !!!!  TITLE
  if (obj_PLAYER_1.hp === 0 && obj_PLAYER_1.hp < obj_PLAYER_2.hp) {
    $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_2.name));
  } else if (obj_PLAYER_2.hp === 0 && obj_PLAYER_1.hp > obj_PLAYER_2.hp)  {
    $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_1.name));
  } else if  (obj_PLAYER_1.hp === 0 && obj_PLAYER_2.hp === 0) {
    $arenas.appendChild(createWinPlayerTitle());
  }
});