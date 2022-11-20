import { Necromancer } from '../Archetypes';
import Character from '../Character';
import { Dwarf } from '../Races';
import getRandomInt from '../utils';

const newDwarfNecromancer = (name: string): Character => {
  const dexterity = getRandomInt(1, 10);
  const dwarf = new Dwarf(name, dexterity);
  const necromancer = new Necromancer(name);

  return new Character(name, dwarf, necromancer);
};

export default newDwarfNecromancer;