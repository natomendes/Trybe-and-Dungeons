import Battle, { PVE, PVP } from './Battle';
import Dragon from './Dragon';
import newDwarfNecromancer from './Factories/Dwarf-necromancer';
import newHalflingRanger from './Factories/Halfling-Ranger';
import newOrcWarrior from './Factories/Orc-Warrior';
import Monster from './Monster';

const player1 = newDwarfNecromancer('NecroDwarf');
const player2 = newHalflingRanger('RanFling');
const player3 = newOrcWarrior('WarOrc');
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle: Battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};