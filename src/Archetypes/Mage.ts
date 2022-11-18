import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  constructor(
    name: string,
    private readonly _energyType: EnergyType,
  ) {
    super(name);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}