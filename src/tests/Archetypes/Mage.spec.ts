import Archetype, { Mage } from "../../Archetypes"

const makeSut = (): Archetype => {
  const name = 'Gandalf';
  const energyType = 'mana';
  return new Mage(name, energyType);
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
})
