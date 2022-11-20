import Race, { Orc } from '../../src/Races';

const makeSut = (): Race => {
  const name = 'Thorin';
  const dexterity = 50;

  return new Orc(name, dexterity);
};

describe('Orc Class', function () {  
  it('Should have maxLifePoints equal to 80', function () {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(74);
  });

  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Thorin');
  });

  it('Should return the right dexterity when getter is called', function () {
    const sut = makeSut();
    expect(sut.dexterity).toBe(50);
  });

  it('Should have createdRacesInstances static method', function () {
    const createdRacesSpy = jest.spyOn(Orc, 'createdRacesInstances');
    Orc.createdRacesInstances();
    expect(createdRacesSpy).toHaveBeenCalled();
  });
});