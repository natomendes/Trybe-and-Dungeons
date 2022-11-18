import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static createdInstances = 0;
  private readonly _energyType: EnergyType = 'stamina';
  constructor(
    name: string,
    special?: number,
    cost?: number,
  ) {
    super(name, special || 0, cost || 0);

    Ranger.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}