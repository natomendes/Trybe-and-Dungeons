import Race from './Race';

export default class Halfling extends Race {
  private static _createdInstances = 0;
  private readonly _maxLifePoints = 60;
  constructor(
    _name: string,
    _dexterity: number,
    
  ) {
    super(_name, _dexterity);
    
    Halfling._createdInstances += 1; 
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}