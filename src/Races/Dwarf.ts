import Race from './Race';

export default class Dwarf extends Race {
  private static _createdIntances: number;

  constructor(
    _name: string,
    _dexterity: number,
    private readonly _maxLifePoints: number,
  ) {
    super(_name, _dexterity);
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;  
  }
}