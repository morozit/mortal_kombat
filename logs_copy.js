import { $chat, getRandom } from "./main.js";

export const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: {
    head: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',

    ],
    body: [
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
      
    ],
    foot: [
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
  },
  defence: {
    head: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в шею.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в голову.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом в голову.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок пальцем в бровь.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара прямо в нос.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар рукой в ухо.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар рукой в глаз.'
    ],
    body: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в печень.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в почку.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по ребрам.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок пальцем в аппендикс.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара прямо в серце.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар рукой в грудь.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар рукой в легкие.',
    ],
    foot: [
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от маваша в колено.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в бедро.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по <вырезано цензурой>.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок пальцем в пятку.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара прямо в голень.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар ногой в бедро.',
      '[playerKick] обманулся и жестокий [playerDefence] отпрыгнул от подсечки.',
    ],

  },
  draw: 'Ничья - это тоже победа!'
};

// export const {
//   start: startlog,
//   end: endlog,
//   hit: {
//     head: hitHeadLog,
//     body: hitBodyLog,
//     foot: hitFootLog,
//   },
//   defence: {
//     head: defHeadLog,
//     body: defBodyLog,
//     foot: defFootLog,
//   },
//   draw: drawLog,
// }

  // firstPlayer, 
  // nameFirstPlayer, 
  // hpFirstPlayer,
  // imgFirstPlayer,
  // kickFirstPlayer,
  // colorFirstPlayer,
  // secondPlayer, 
  // namesecondPlayer, 
  // hpsecondPlayer,
  // imgsecondPlayer,
  // kicksecondPlayer,
  // colorsecondPlayer,

// console.log(defHeadLog);


// !!!! -----------CHAT LOG--------------------------
export function generateLog (type, plKick, plDefence) {
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
      textLog = logs.start
        .replace('[time]', `${battleTime}`)
        .replace('[player1]', `${plKickName}`)
        .replace('[player2]', `${plDefenceName}`);
      break;
    // ? switch hit = [head, body, food]   
    case 'hit':
      textLog = 
        `${battleTime} ${logs[type][haed][getRandom(logs[type][haed].length) - 1]
        .replace('[playerKick]', `${plKickName}`)
        .replace('[playerDefence]', `${plDefenceName}`)
        } ${kick} жизни  ${plDefenceHp}`;
      break;

    case 'defence': 
      textLog = 
        `${battleTime} ${logs[type][head][getRandom(logs[type][head].length) - 1]
        .replace('[playerKick]', `${plKickName}`)
        .replace('[playerDefence]', `${plDefenceName}`)} ${def} жизни  ${plDefenceHp}`;  
      break;
    
    case 'end':
      textLog = 
        `${battleTime} ${logs[type][getRandom(logs[type].length) - 1]
          .replace('[playerWins]', `${plKickName}`)
          .replace('[playerLose]', `${plDefenceName}`)}`;
      break;

    case 'draw':
      textLog = `${battleTime} ${logs[type]}`
      break;

    default: 'упс проблемка';
  }
  let el = `<p>${textLog}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}
console.log(logs.hit);
console.log(logs);