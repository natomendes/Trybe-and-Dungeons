/* eslint-disable max-lines-per-function */
/* eslint-disable class-methods-use-this */
import { SimpleFighter } from '../src/Fighter';
import Monster from '../src/Monster';

const makeSimpleFighterStub = (): SimpleFighter => {
  class SimpleFighterStub implements SimpleFighter {
    lifePoints = 100;
    strength = 50;
    attack(): void {}
    receiveDamage(attackPoints: number): number {
      return attackPoints;
    }
  }

  return new SimpleFighterStub();
};

interface SutTypes {
  sut: Monster
  simpleFighterStub: SimpleFighter
}

const makeSut = (): SutTypes => {  
  const simpleFighterStub = makeSimpleFighterStub();
  const sut = new Monster();
  return {
    sut,
    simpleFighterStub,
  };
};

describe('Monster Class', function () {
  it('Should have the attribute lifePoints set as default to 85', function () {
    const { sut } = makeSut();
    expect(sut.lifePoints).toBe(85);
  });

  it('Should have the attribute strength set as default to 63', function () {
    const { sut } = makeSut();
    expect(sut.strength).toBe(63);
  });

  it('Should set lifePoints to lifePoints - damage if damage is smaller than lifePoints', function () {
    const attackPoints = 100;
    const { sut } = makeSut();
    sut.receiveDamage(attackPoints);
    expect(sut.lifePoints).toBe(70);
  });

  it('Should set lifePoints to -1 if damage is bigger than lifePoints', function () {
    const attackPoints = 170;
    const { sut } = makeSut();
    sut.receiveDamage(attackPoints);
    expect(sut.lifePoints).toBe(-1);
  });

  it('Should call receiveDamage on the enemy passed as argument when attack method is called', function () {
    const { sut, simpleFighterStub } = makeSut();
    const receiveDamageSpy = jest.spyOn(simpleFighterStub, 'receiveDamage');
    sut.attack(simpleFighterStub);
    expect(receiveDamageSpy).toHaveBeenCalledWith(63);
  });
});
