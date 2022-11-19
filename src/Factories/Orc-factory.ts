import { Orc } from '../Races';
import getRandomInt from '../utils';

const newOrc = (name: string): Orc => {
  const dexterity = getRandomInt(1, 10);

  return new Orc(name, dexterity);
};

export default newOrc;