import Race, { Elf } from "../../Races";

const makeSut = (): Race => {
  const name = 'Legolas';
  const dexterity = 80;

  return new Elf(name, dexterity);
}

describe('Elf Class', () => {  
  it('Should have maxLifePoints equal to 99', () => {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(99)
  });

  it('Should return the right name when getter is called', () => {
    const sut = makeSut();
    expect(sut.name).toBe('Legolas');
  });

  it('Should return the right dexterity when getter is called', () => {
    const sut = makeSut();
    expect(sut.dexterity).toBe(80);
  });
})