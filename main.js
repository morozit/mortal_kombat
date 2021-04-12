// ----------------DOM---------------------------
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

// ----------------Object------------------------
const playerIcon = {
  scorpion: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  kitana: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  liukang: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  sonya: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  subzero: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  orco: 'https://www.fightersgeneration.com/nx/chars/kintaro-arcadestance.gif',
};

const obj_PLAYER_1 = {
  player: 1,
  name: 'sonya',
  hp: 100,
  img: playerIcon.sonya,
  weapon: ['катана'],
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

function changeHP(playerHP) {
  let $playerLife = document.querySelector(`.player${playerHP.player} .life`);
  playerHP.hp -= getRandom(20);

  if (playerHP.hp <= 0) {
    playerHP.hp = 0;
  }
  // !!!!! LOG-----------
  console.log(`${playerHP.name}-♥`, playerHP.hp);
  // !!!!!---------------
  $playerLife.style.width = `${playerHP.hp}%`
  return playerHP.name
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


// ------------addEventListener------------------
$randomButton.addEventListener('click', () => {
  changeHP(obj_PLAYER_1);
  changeHP(obj_PLAYER_2);

  if (obj_PLAYER_1.hp === 0 || obj_PLAYER_2.hp === 0) {
    $randomButton.disabled = true;
  }

  if (obj_PLAYER_1.hp === 0 && obj_PLAYER_1.hp < obj_PLAYER_2.hp) {
    $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_2.name));
  } else if (obj_PLAYER_2.hp === 0 && obj_PLAYER_1.hp > obj_PLAYER_2.hp)  {
    $arenas.appendChild(createWinPlayerTitle(obj_PLAYER_1.name));
  } else if  (obj_PLAYER_1.hp === 0 && obj_PLAYER_2.hp === 0) {
    $arenas.appendChild(createWinPlayerTitle());
  }
});


$arenas.appendChild(createPlayer(obj_PLAYER_1));
$arenas.appendChild(createPlayer(obj_PLAYER_2));