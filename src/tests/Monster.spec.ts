import { SimpleFighter } from "../Fighter";
import Monster from "../Monster";

const makeSimpleFighterStub = (): SimpleFighter => {
  class SimpleFighterStub implements SimpleFighter {
    lifePoints: number = 100;
    strength: number = 50;
    attack(): void {}
    receiveDamage(attackPoints: number): number {
      return 0;
    }
  }

  return new SimpleFighterStub();
}

interface SutTypes {
  sut: Monster
  simpleFighterStub: SimpleFighter
}

const makeSut = (): SutTypes => {  
  const simpleFighterStub = makeSimpleFighterStub();
  const sut = new Monster();
  return {
    sut,
    simpleFighterStub
  }
}

describe('Monster Class', () => {
  it('Should have the attribute lifePoints set as default to 85', () => {
    const { sut } = makeSut();
    expect(sut.lifePoints).toBe(85);
  });

  it('Should have the attribute strength set as default to 63', () => {
    const { sut } = makeSut();
    expect(sut.strength).toBe(63);
  });

  it('Should set lifePoints to -1 if lifePoints drop below 1 after receiveDamage is called', () => {
    const attackPoints = 170;
    const { sut } = makeSut();
    sut.receiveDamage(attackPoints);
    expect(sut.lifePoints).toBe(-1);
  });

  it('Should call receiveDamage on the enemy pass as argument when attack method is called', () => {
    const { sut, simpleFighterStub } = makeSut();
    const receiveDamageSpy = jest.spyOn(simpleFighterStub, 'receiveDamage');
    sut.attack(simpleFighterStub);
    expect(receiveDamageSpy).toHaveBeenCalledWith(63);
  });
})
