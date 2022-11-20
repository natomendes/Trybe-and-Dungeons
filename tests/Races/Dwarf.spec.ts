/* eslint-disable max-lines-per-function */
import Race, { Dwarf } from '../../src/Races';

class DwarfStub extends Race {
  private static _createdInstances = 0;
  private readonly _maxLifePoints = 80;
  constructor(
    _name: string,
    _dexterity: number,
      
  ) {
    super(_name, _dexterity);
      
    DwarfStub._createdInstances += 1; 
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

const makeSut = (): Race => {
  const name = 'Thorin';
  const dexterity = 50;

  return new Dwarf(name, dexterity);
};

describe('Dwarf Class', function () {  
  it('Should have maxLifePoints equal to 80', function () {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(80);
  });

  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Thorin');
  });

  it('Should return the right dexterity when getter is called', function () {
    const sut = makeSut();
    expect(sut.dexterity).toBe(50);
  });

  it('Should throws when createdRacesInstances static method is not implemented', function () {
    expect(DwarfStub.createdRacesInstances).toThrow();
  });

  it('Should have createdRacesInstances static method', function () {
    const createdRacesSpy = jest.spyOn(Dwarf, 'createdRacesInstances');
    Dwarf.createdRacesInstances();
    expect(createdRacesSpy).toHaveBeenCalled();
  });
});
