import { Ranger } from '../Archetypes';
import Character from '../Character';
import { Halfling } from '../Races';
import getRandomInt from '../utils';

const newHalflingRanger = (name: string): Character => {
  const dexterity = getRandomInt(1, 10);
  const halfling = new Halfling(name, dexterity);
  const ranger = new Ranger(name);
  return new Character(name, halfling, ranger);
};

export default newHalflingRanger;