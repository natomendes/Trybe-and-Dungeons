import Race, { Halfling } from '../../src/Races';

const makeSut = (): Race => {
  const name = 'Legolas';
  const dexterity = 80;

  return new Halfling(name, dexterity);
};

describe('Halfling Class', function () {  
  it('Should have maxLifePoints equal to 99', function () {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(60);
  });

  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Legolas');
  });

  it('Should return the right dexterity when getter is called', function () {
    const sut = makeSut();
    expect(sut.dexterity).toBe(80);
  });

  it('Should have createdRacesInstances static method', function () {
    const createdRacesSpy = jest.spyOn(Halfling, 'createdRacesInstances');
    Halfling.createdRacesInstances();
    expect(createdRacesSpy).toHaveBeenCalled();
  });
});