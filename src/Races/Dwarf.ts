import Race from './Race';

export default class Dwarf extends Race {
  private static _createdInstances = 0;
  private readonly _maxLifePoints = 80;
  constructor(
    _name: string,
    _dexterity: number,
    
  ) {
    super(_name, _dexterity);
    
    Dwarf._createdInstances += 1; 
  }

  static createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}