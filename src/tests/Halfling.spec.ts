import Race, { Halfling } from "../Races";

const makeSut = (): Race => {
  const name = 'Legolas';
  const dexterity = 80;

  return new Halfling(name, dexterity);
}

describe('Dwarf Class', () => {  
  it('Should have maxLifePoints equal to 99', () => {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(60)
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