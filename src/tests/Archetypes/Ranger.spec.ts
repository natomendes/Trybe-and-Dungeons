import Archetype, { Ranger } from "../../Archetypes"

const makeSut = (): Archetype => {
  const name = 'Ranger';
  return new Ranger(name);
}

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Ranger';
  const special  = 100;
  return new Ranger(name, special);
}

const makeSutWithCostValue = (): Archetype => {
  const name = 'Ranger';
  const cost  = 70;
  return new Ranger(name, undefined, cost);
}

describe('Ranger Class', () => {
  it('Should return the right name when getter is called', () => {
    const sut = makeSut()
    expect(sut.name).toBe('Ranger');
  });

  it('Should have mana as energyType', () => {
    const sut = makeSut()
    expect(sut.energyType).toBe('stamina');
  });

  it('Should return the right special when value is provided to constructor', () => {
    const sut = makeSutWithSpecialValue()
    expect(sut.special).toBe(100);
  });

  it('Should return the right cost when value is provided to constructor', () => {
    const sut = makeSutWithCostValue()
    expect(sut.cost).toBe(70);
  });
})
