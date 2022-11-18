import Race from './Race';

export default class Orc extends Race {
  private static _createdInstances = 0;
  private readonly _maxLifePoints = 74;
  constructor(
    _name: string,
    _dexterity: number,
    
  ) {
    super(_name, _dexterity);
    
    Orc._createdInstances += 1; 
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}