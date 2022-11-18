import Race from './Race';

export default class Elf extends Race {
  private static _createdInstances = 0;
  private readonly _maxLifePoints = 99;
  constructor(
    _name: string,
    _dexterity: number,
    
  ) {
    super(_name, _dexterity);
    
    Elf._createdInstances += 1; 
  }

  static createdRacesInstances(): number {
    return Elf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}