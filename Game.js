import { createElement } from "./utils.js";
import { randPowerHit, OPPONENT, LOGS } from "./constant.js";
// import { obj_PLAYER_1, obj_PLAYER_2 } from "./main.js";
import { $arenas, $fightButton, $formFight, $chat } from "./DOM.js";
import { getRandom } from "./utils.js";
import  REQUEST from "./FetchAPI.js";
import Player from "./Player.js";


let obj_PLAYER_1;
let obj_PLAYER_2;


const request = new REQUEST();

export class Game {
  // в отдельний класс
  constructor(props) {
    this.baseUrl = "https://reactmarathon-api.herokuapp.com/api/mk";
  }

  start = async () => {
    $formFight.style.display = "none";
    this.createStartButton();
    
    const players = await request.getPlayers();
    console.log(players);

    const p1 = players[getRandom(players.length) - 1];
    const p2 = players[getRandom(players.length) - 1];

    console.log(p1, p2);

    obj_PLAYER_1 = new Player({
      ...p1,
      player: 1,
      kick: 0,
      color: '#42DDF5',
      rootSelector: 'arenas',
    });
    
    obj_PLAYER_2 = new Player({
      ...p2,
      player : 2,
      kick : 0,
      color : '#FFFF00',
      rootSelector: 'arenas',
    })

    console.log(obj_PLAYER_1, obj_PLAYER_2);
  }

  


  // constructor (props) {
  //   this.player_1 = props.player_1;
  //   this.player_2 = props.player_2;
  // }
  // start = () => {
  //   $formFight.style.display = "none";
  //   this.createStartButton();  
  // }

  
  // !!!!  Кнопка Старт -------------------------
  createStartButton () {
    let $startBtnDiv = createElement('div', 'startWrap');
    let $startBtn = createElement('button', 'button');
    $startBtn.innerHTML = 'Start';
    $startBtnDiv.appendChild($startBtn);
    $arenas.appendChild($startBtnDiv);

    $startBtn.addEventListener('click', () => {
      $startBtnDiv.style.display = "none";
      $formFight.style.display = '';
      this.generateLog('start', obj_PLAYER_1, obj_PLAYER_2);
    });
  }
// !!!! Кнопка рестарт -----------------------------
  createReloadButton = () => {
    let $reloadBtnDiv = createElement('div', 'reloadWrap');
    let $reloadBtn = createElement('button', 'button');
    $reloadBtn.innerHTML = 'Reload';
    $reloadBtn.addEventListener('click', () => {
      window.location.reload();
    });
    $reloadBtnDiv.appendChild($reloadBtn);
    $arenas.appendChild($reloadBtnDiv);
  }

  // !!!! TITLE ------------------------------
  outputWinPlayerTitle = (p1, p2) => {
    if (p1.hp === 0 || p2.hp === 0) {

      if (p1.hp === 0 && p1.hp < p2.hp) {
        $arenas.appendChild(this.createWinPlayerTitle(p2.name));
        this.generateLog('end', obj_PLAYER_2, obj_PLAYER_1);
      } else if (p2.hp === 0 && p1.hp > p2.hp)  {
        $arenas.appendChild(this.createWinPlayerTitle(p1.name));
        this.generateLog('end', obj_PLAYER_1, obj_PLAYER_2);
      } else if  (p1.hp === 0 && p2.hp === 0) {
        $arenas.appendChild(this.createWinPlayerTitle());
        this.generateLog('draw', obj_PLAYER_1, obj_PLAYER_2);
      }
      $fightButton.disabled = true;
      $formFight.remove();
      this.createReloadButton(); 
    }
    
  }

  createWinPlayerTitle = (name) => {
    let $winTitle = createElement('div', 'winTitle');
    if (name) {
      $winTitle.innerHTML = `${name} wins!!!`;
    } else {
      $winTitle.innerHTML = `draw`;
    }
    return $winTitle;
  }

  generateLog (type, plKick, plDefence) {
    let textLog = '';
    let timeNow = new Date().toTimeString().replace(/ .*/, '');
    let battleTime = `<span style='font-weight: bold;'>[${timeNow}]</span>`;
    let kick = `<span style='color: #cd0e03; font-weight: bold;'>-${plKick.kick}</span>`;
    let def = `<span style='color: #00d600; font-weight: bold;'>-0</span>`;
    let plKickName = `<span style='color: ${plKick.color}; font-weight: bold;'>${plKick.name}</span>`;
    let plKickHp = `<span style='color: ${plKick.color}; font-weight: bold;'>[${plKick.hp} / 100]</span>`
    let plDefenceName = `<span style='color: ${plDefence.color}; font-weight: bold;'>${plDefence.name}</span>`;
    let plDefenceHp = `<span style='color: ${plDefence.color}; font-weight: bold;'>[${plDefence.hp} / 100]</span>`;
    
    switch (type) {

      case 'start':
        textLog = LOGS.start
          .replace('[time]', `${battleTime}`)
          .replace('[player1]', `${plKickName}`)
          .replace('[player2]', `${plDefenceName}`);
        break;
      // ? switch hit = [head, body, food]   
      case 'hit': 
        textLog = 
          `${battleTime} ${LOGS[type][getRandom(LOGS[type].length) - 1]
          .replace('[playerKick]', `${plKickName}`)
          .replace('[playerDefence]', `${plDefenceName}`)
          } ${kick} жизни  ${plDefenceHp}`;
        break;

      case 'defence': 
        textLog = 
          `${battleTime} ${LOGS[type][getRandom(LOGS[type].length) - 1]
          .replace('[playerKick]', `${plKickName}`)
          .replace('[playerDefence]', `${plDefenceName}`)} ${def} жизни  ${plDefenceHp}`;  
        break;
      
      case 'end':
        textLog = 
          `${battleTime} ${LOGS[type][getRandom(LOGS[type].length) - 1]
            .replace('[playerWins]', `${plKickName}`)
            .replace('[playerLose]', `${plDefenceName}`)}`;
        break;

      case 'draw':
        textLog = `${battleTime} ${LOGS[type]}`
        break;

      default: 
    }
    let el = `<p>${textLog}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
  }

  // !!!! ЛОГИКА нанесенния ударов ----------------
  logicStrikes = (pA1, pA2) => {
    obj_PLAYER_1.kick = pA1.value;
    obj_PLAYER_2.kick = pA2.value;

    if (pA1.hit !== pA2.defence) {
      obj_PLAYER_2.changeHP(pA1.value);
      obj_PLAYER_2.renderHP();
      this.generateLog('hit', obj_PLAYER_1, obj_PLAYER_2);
    } else {
      this.generateLog('defence', obj_PLAYER_1, obj_PLAYER_2);
    }

    if (pA2.hit !== pA1.defence) {
      obj_PLAYER_1.changeHP(pA2.value);
      obj_PLAYER_1.renderHP();
      this.generateLog('hit', obj_PLAYER_2, obj_PLAYER_1);
    } else {
      this.generateLog('defence', obj_PLAYER_2, obj_PLAYER_1);
    } 
  }

// !!! куда бьет пк
  enemyAttack = () => {
    let hit = OPPONENT[getRandom(3) - 1];
    let defence = OPPONENT[getRandom(3) - 1];

    return {
      value: getRandom(randPowerHit[hit]),
      hit,
      defence,  
    }
  }

// !!!! ----------------------------------------
  playerAttack = () => {

    const attack = {};
    for (const item of $formFight) {
      

      if (item.checked && item.name === 'hit') {
        attack.value = getRandom(randPowerHit[item.value]);
        attack.hit = item.value;
      }
      
      if (item.checked && item.name === 'defence') {
        attack.defence = item.value;
      }
      // !!!!!!!!! ВКЛЮЧИТЬ  !!!!!!
      // item.checked = false;
    }
    return attack;
  }
}

