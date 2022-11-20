/* eslint-disable max-lines-per-function */
import Archetype, { Necromancer } from '../../src/Archetypes';

const makeSut = (): Archetype => {
  const name = 'Sauron';
  return new Necromancer(name);
};

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Sauron';
  const special = 100;
  return new Necromancer(name, special);
};

const makeSutWithCostValue = (): Archetype => {
  const name = 'Sauron';
  const cost = 70;
  return new Necromancer(name, undefined, cost);
};

describe('Necromancer Class', function () {
  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Sauron');
  });

  it('Should have mana as energyType', function () {
    const sut = makeSut();
    expect(sut.energyType).toBe('mana');
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
    const createdArchetypeSpy = jest.spyOn(Necromancer, 'createdArchetypeInstances');
    Necromancer.createdArchetypeInstances();
    expect(createdArchetypeSpy).toHaveBeenCalled();
  });
});
