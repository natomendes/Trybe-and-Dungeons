import Race, { Dwarf } from '../../src/Races';

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
});
