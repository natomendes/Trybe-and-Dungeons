import Race from "../Races";

const makeSut = (): Race => {
  const name = 'Thorin';
  const dexterity = 50;
  const maxLifePoints = 80;
  class DwarfStub extends Race {
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
  return new DwarfStub(name, dexterity, maxLifePoints);
}

describe('Dwarf Class', () => {  
  it('Should have attribute maxLifePoints', () => {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBeDefined()
  })
})
