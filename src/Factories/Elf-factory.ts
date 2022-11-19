import { Elf } from '../Races';
import getRandomInt from '../utils';

const newElf = (name: string): Elf => {
  const dexterity = getRandomInt(1, 10);

  return new Elf(name, dexterity);
};

export default newElf;