/* eslint-disable max-lines-per-function */
import Archetype, { Mage } from '../../src/Archetypes';
import { EnergyType } from '../../src/Energy';

class MageWithoutStatic extends Archetype {
  private static createdInstances = 0;
  private readonly _energyType: EnergyType = 'mana';
  constructor(
    name: string,
    special?: number,
    cost?: number,
  ) {
    super(name, special || 0, cost || 0);

    MageWithoutStatic.createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

const makeSut = (): Archetype => {
  const name = 'Gandalf';
  return new Mage(name);
};

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Gandalf';
  const special = 100;
  return new Mage(name, special);
};

const makeSutWithCostValue = (): Archetype => {
  const name = 'Gandalf';
  const cost = 70;
  return new Mage(name, undefined, cost);
};

describe('Mage Class', function () {
  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Gandalf');
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

  it('Should throws when createdRacesInstances static method is not implemented', function () {
    expect(MageWithoutStatic.createdArchetypeInstances).toThrow();
  });

  it('Should have createdRacesInstances static method', function () {
    const createdArchetypeSpy = jest.spyOn(Mage, 'createdArchetypeInstances');
    Mage.createdArchetypeInstances();
    expect(createdArchetypeSpy).toHaveBeenCalled();
  });
});
