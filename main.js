// ----------------DOM---------------------------
const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
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

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];


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

// ------------addEventListener------------------
// $randomButton.addEventListener('click', () => {
//   obj_PLAYER_1.changeHP(getRandom(20));
//   obj_PLAYER_2.changeHP(getRandom(20));
//   obj_PLAYER_1.renderHP();
//   obj_PLAYER_2.renderHP();

//   if (obj_PLAYER_1.hp === 0 || obj_PLAYER_2.hp === 0) {
//     $randomButton.disabled = true;
//     createReloadButton()
//   }

//   if (obj_PLAYER_1.hp === 0 && obj_PLAYER_1.hp < obj_PLAYER_2.hp) {
//     $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_2.name));
//   } else if (obj_PLAYER_2.hp === 0 && obj_PLAYER_1.hp > obj_PLAYER_2.hp)  {
//     $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_1.name));
//   } else if  (obj_PLAYER_1.hp === 0 && obj_PLAYER_2.hp === 0) {
//     $arenas.appendChild(createWinPlayerTitle());
//   }
// });


$arenas.appendChild(createPlayer(obj_PLAYER_1));
$arenas.appendChild(createPlayer(obj_PLAYER_2));

// !!! куда бє компютер
function enemyAttack() {
  let hit = ATTACK[getRandom(3) - 1];
  let defence = ATTACK[getRandom(3) - 1];
  // console.log('###: hit', hit);
  // console.log('###: defence', defence);
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,  
  }
}


// !!! куди бє гравець
$formFight.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log($formFight);
  let enemy = enemyAttack();
  // console.log('### enemy', enemy);
  let attack = {};

  for (const item of $formFight) {
    console.dir(item);
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    
    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    // item.checked = false;
  }
  console.log('###', attack);
  console.log('###', enemy);
});