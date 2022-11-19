import { Warrior } from '../Archetypes';

const newWarrior = (name: string): Warrior => new Warrior(name);

export default newWarrior;