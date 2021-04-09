const $playerIcon = {
  scorpion: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  kitana: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  liukang: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  sonya: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  subzero: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
}

const player_1 = {
  name: 'Самурай',
  hp: '50%',
  img: $playerIcon.scorpion,
  weapon: ['катана'],
  attack: () => {
    return console.log(`${player_1.name} Fight...`);
  },
}

const player_2 = {
  name: 'Гладітор',
  hp: '100%',
  img: $playerIcon.liukang,
  weapon: ['трезубец'],
  attack: () => {
    return console.log(`${player_2.name} Fight...`);
  },
}

function createPlayer(player, data) {
  // ! $player1
  let $player1 = document.createElement('div');
  $player1.classList.add(player);
  document.querySelector('.arenas').appendChild($player1);

  // !!  $progressbar
  let $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  // !!! $life
  let $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = data.hp;
  $progressbar.appendChild($life);

  // !!! $name
  let $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerHTML = data.name;
  $progressbar.appendChild($name);

  // !!  $character
  let $character = document.createElement('div');
  $character.classList.add('$character');
  $player1.appendChild($character);

  // !!! $img
  let $img = document.createElement('img');
  $img.src = data.img;
  $character.appendChild($img);  
}

createPlayer('player1', player_1);
createPlayer('player2', player_2);