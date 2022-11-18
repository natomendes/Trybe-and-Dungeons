import Archetype, { Necromancer } from "../../Archetypes"

const makeSut = (): Archetype => {
  const name = 'Sauron';
  return new Necromancer(name);
}

const makeSutWithSpecialValue = (): Archetype => {
  const name = 'Sauron';
  const special  = 100;
  return new Necromancer(name, special);
}

const makeSutWithCostValue = (): Archetype => {
  const name = 'Sauron';
  const cost  = 70;
  return new Necromancer(name, undefined, cost);
}

describe('Necromancer Class', () => {
  it('Should return the right name when getter is called', () => {
    const sut = makeSut()
    expect(sut.name).toBe('Sauron');
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
