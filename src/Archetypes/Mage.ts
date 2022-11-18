import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static createdInstances = 0;
  constructor(
    name: string,
    private readonly _energyType: EnergyType,
    special?: number,
    cost?: number,
  ) {
    super(name, special || 0, cost || 0);

    Mage.createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}