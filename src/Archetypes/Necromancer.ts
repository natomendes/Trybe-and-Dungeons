import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static createdInstances = 0;
  private readonly _energyType: EnergyType = 'mana';
  constructor(
    name: string,
    special?: number,
    cost?: number,
  ) {
    super(name, special || 0, cost || 0);

    Necromancer.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}