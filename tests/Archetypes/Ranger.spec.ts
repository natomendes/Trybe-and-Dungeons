/* eslint-disable max-lines-per-function */
import Archetype, { Ranger } from '../../src/Archetypes';

const makeSut = (): Archetype => {
  const name = 'Ranger';
  return new Ranger(name);
};

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Ranger';
  const special = 100;
  return new Ranger(name, special);
};

const makeSutWithCostValue = (): Archetype => {
  const name = 'Ranger';
  const cost = 70;
  return new Ranger(name, undefined, cost);
};

describe('Ranger Class', function () {
  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Ranger');
  });

  it('Should have mana as energyType', function () {
    const sut = makeSut();
    expect(sut.energyType).toBe('stamina');
  });

  it('Should return the right special when value is provided to constructor', function () {
    const sut = makeSutWithSpecialValue();
    expect(sut.special).toBe(100);
  });

  it('Should return the right cost when value is provided to constructor', function () {
    const sut = makeSutWithCostValue();
    expect(sut.cost).toBe(70);
  });

  it('Should have createdRacesInstances static method', function () {
    const createdArchetypeSpy = jest.spyOn(Ranger, 'createdArchetypeInstances');
    Ranger.createdArchetypeInstances();
    expect(createdArchetypeSpy).toHaveBeenCalled();
  });
});
