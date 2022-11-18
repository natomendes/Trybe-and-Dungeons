import Race, { Dwarf } from "../Races";


const makeSut = (): Race => {
  const name = 'Thorin';
  const dexterity = 50;

  return new Dwarf(name, dexterity);
}

describe('Dwarf Class', () => {  
  it('Should have maxLifePoints equal to 80', () => {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBe(80)
  });

  it('Should return the right name when getter is called', () => {
    const sut = makeSut();
    expect(sut.name).toBe('Thorin');
  });

  it('Should return the right dexterity when getter is called', () => {
    const sut = makeSut();
    expect(sut.dexterity).toBe(50);
  });
})




