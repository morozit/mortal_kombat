import { $chat, getRandom } from "./main.js";

export const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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
        `${battleTime} ${logs[type][getRandom(logs[type].length) - 1]
        .replace('[playerKick]', `${plKickName}`)
        .replace('[playerDefence]', `${plDefenceName}`)
        } ${kick} жизни  ${plDefenceHp}`;
      break;

    case 'defence': 
      textLog = 
        `${battleTime} ${logs[type][getRandom(logs[type].length) - 1]
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

    default: 
  }
  let el = `<p>${textLog}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}