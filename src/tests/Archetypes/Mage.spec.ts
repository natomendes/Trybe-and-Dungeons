import Archetype, { Mage } from "../../Archetypes"

const makeSut = (): Archetype => {
  const name = 'Gandalf';
  return new Mage(name);
}

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Gandalf';
  const special  = 100;
  return new Mage(name, special);
}

const makeSutWithCostValue = (): Archetype => {
  const name = 'Gandalf';
  const cost  = 70;
  return new Mage(name, undefined, cost);
}

describe('Mage Class', () => {
  it('Should return the right name when getter is called', () => {
    const sut = makeSut()
    expect(sut.name).toBe('Gandalf');
  });

  it('Should have mana as energyType', () => {
    const sut = makeSut()
    expect(sut.energyType).toBe('mana');
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
