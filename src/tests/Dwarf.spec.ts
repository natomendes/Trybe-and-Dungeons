import Race from "../Races";
import Dwarf from "../Races/Dwarf";

const makeSut = (): Race => {
  const name = 'Thorin';
  const dexterity = 50;
  const maxLifePoints = 80;

  return new Dwarf(name, dexterity, maxLifePoints);
}

describe('Dwarf Class', () => {  
  it('Should have attribute maxLifePoints', () => {
    const sut = makeSut();
    expect(sut.maxLifePoints).toBeDefined();
  });

  it('Should return Thorin when name getter is called', () => {
    const sut = makeSut();
    expect(sut.name).toBe('Thorin');
  });
})
