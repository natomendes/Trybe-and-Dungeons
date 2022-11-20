import Archetype, { Warrior } from '../../src/Archetypes';

const makeSut = (): Archetype => {
  const name = 'Warrior';
  return new Warrior(name);
};

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Warrior';
  const special = 100;
  return new Warrior(name, special);
};

const makeSutWithCostValue = (): Archetype => {
  const name = 'Warrior';
  const cost = 70;
  return new Warrior(name, undefined, cost);
};

describe('Warrior Class', function () {
  it('Should return the right name when getter is called', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Warrior');
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
});
