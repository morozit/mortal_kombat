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

const PLAYER_1 = {
  player: 1,
  name: 'sonya',
  hp: 100,
  img: playerIcon.sonya,
  weapon: ['катана'],
  attack: () => {
    return console.log(`${PLAYER_1.name} Fight...`);
  },
};

const PLAYER_2 = {
  player: 2,
  name: 'orco',
  hp: 100,
  img: playerIcon.orco,
  weapon: ['трезубец'],
  attack: () => {
    return console.log(`${PLAYER_2.name} Fight...`);
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

  playerHP.hp -= random(20);
  
  playerHP.hp <= 0 ? playerHP.hp = 0 : playerHP.hp;
  $playerLife.style.width = `${playerHP.hp}%`

  console.log(`${playerHP.name}-♥`, playerHP.hp);

  if (playerHP.hp <= 0) {
    $randomButton.disabled = true

    // console.log('function', playerWins(PLAYER_1, PLAYER_2));
    $arenas.appendChild(createWinPlayerTag(playerWins(PLAYER_1, PLAYER_2)));
    // $arenas.appendChild(createWinPlayerTag(playerWins()));
  }
  return playerHP.name
}

const random = (num) => {
  console.log('RANDOM', Math.ceil(Math.random() * num));
  return Math.ceil(Math.random() * num);
};

function playerWins (p1, p2) {
  if (p1.hp === p2.hp) {
    return `ничья`;
  }
  
  if (p1.hp > p2.hp) {
    return p1.name;
  }
  if (p1.hp < p2.hp) {
    return p2.name;
  }

  return
}

// function playerWins () {
//   if (PLAYER_1.hp > PLAYER_2.hp) {
//     return PLAYER_1.name;
//   }
//   if (PLAYER_1.hp < PLAYER_2.hp) {
//     return PLAYER_2.name;
//   }
//   return
// }

function createWinPlayerTag(name) {
  let $winTitle = createElement('div', 'winTitle');
  $winTitle.innerHTML = `${name} wins!!!` ;
  return $winTitle;
}


// ------------addEventListener------------------
$randomButton.addEventListener('click', () => {
  changeHP(PLAYER_1);
  changeHP(PLAYER_2);
});


$arenas.appendChild(createPlayer(PLAYER_1));
$arenas.appendChild(createPlayer(PLAYER_2));
