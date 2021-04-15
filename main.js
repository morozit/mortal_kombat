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

  // !!!add pers
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  
  $character.appendChild($img);

  $player.appendChild($character);
  $player.appendChild($progressbar);

  return $player;
}


// !!!!  HP ---------------------------
function changeHP(lostLife) {
  this.hp -= lostLife;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  // console.log(`%c${this.name} -${lostLife}hp`, 'color: #ffffff; background-color: #CD0E03; padding: 4px 50px; font-size: 12px;');

  // console.log(`%c${this.name} ${this.hp}-♥`, 'color: #ffffff; background-color: #4CAF50; padding: 4px 50px; font-size: 12px;');
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
// !!! -------------------------------------

// !!!! TITLE -------------------------------
function outputWinPlayerTitle (p1, p2) {
  if (p1.hp === 0 && p1.hp < p2.hp) {
    $arenas.appendChild(createWinPlayerTitle(p2.name));
  } else if (p2.hp === 0 && p1.hp > p2.hp)  {
    $arenas.appendChild(createWinPlayerTitle(p1.name));
  } else if  (p1.hp === 0 && p2.hp === 0) {
    $arenas.appendChild(createWinPlayerTitle());
  }
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
// !!!!  ----------------------------------------------


// !!!! ЛОГИКА нанесенния ударов ----------------
function logicStrikes (pA1, pA2) {

  if (pA1.hit !== pA2.defence) {
    obj_PLAYER_2.changeHP(pA1.value);
  }

  if (pA2.hit !== pA1.defence) {
    obj_PLAYER_1.changeHP(pA2.value);
  }
  
  obj_PLAYER_1.renderHP();
  obj_PLAYER_2.renderHP();
}

// !!! куда бьет пк
function enemyAttack() {
  let hit = OPPONENT[getRandom(3) - 1];
  let defence = OPPONENT[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,  
  }
}
// !!!! ----------------------------------------
function playerAttack() {
  for (const item of $formFight) {

    if (item.checked && item.name === 'hit') {
      value = getRandom(HIT[item.value]);
      hit = item.value;
    }
    
    if (item.checked && item.name === 'defence') {
      defence = item.value;
    }
    // !!!!!!!!! ВКЛЮЧИТИ!!!!!!
    // item.checked = false;
  }

  return {
    value,
    hit,
    defence, 
  }
}

// !!!!----------------------------------------


// !!!! рестарт боя-----------------------------
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
// !!!-------------------------------------------


$arenas.appendChild(createPlayer(obj_PLAYER_1));
$arenas.appendChild(createPlayer(obj_PLAYER_2));


$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let obj_enemyAttack = enemyAttack();
  let obj_playerAttack = playerAttack();

  logicStrikes(obj_playerAttack, obj_enemyAttack)
  outputWinPlayerTitle(obj_PLAYER_1, obj_PLAYER_2);

  console.log(`${obj_PLAYER_1.name} ${obj_PLAYER_1.hp}-♥`, obj_enemyAttack);
  console.log(`${obj_PLAYER_2.name} ${obj_PLAYER_2.hp}-♥`, obj_playerAttack);


    // !!!!!! marking the end of the battle   &   remove form
  if (obj_PLAYER_1.hp === 0 || obj_PLAYER_2.hp === 0) {
    $fightButton.disabled = true;
    $formFight.remove();
    createReloadButton();
  }
});