import Character from '../Character';
import newOrc from './Orc-factory';
import newWarrior from './Warrior-factory';

const makeOrcWarrior = (name: string): Character =>
  new Character(name, newOrc(name), newWarrior(name));

export default makeOrcWarrior;