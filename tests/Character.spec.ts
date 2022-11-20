/* eslint-disable max-lines-per-function */
/* eslint-disable class-methods-use-this */
import Character from '../src/Character';
import { SimpleFighter } from '../src/Fighter';

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
  sut: Character
  simpleFighterStub: SimpleFighter
}

const makeSut = (): SutTypes => {
  const simpleFighterStub = makeSimpleFighterStub();
  const sut = new Character('Character');
  return {
    sut,
    simpleFighterStub,
  };
};

describe('Character Class', function () {
  it('Should have attribute race', function () {
    const { sut } = makeSut();
    expect(sut.race).toBeDefined();
  });

  it('Should have attribute archetype', function () {
    const { sut } = makeSut();
    expect(sut.archetype).toBeDefined();
  });

  it('Should have attribute lifePoints', function () {
    const { sut } = makeSut();
    expect(sut.lifePoints).toBeDefined();
  });

  it('Should have attribute strength', function () {
    const { sut } = makeSut();
    expect(sut.strength).toBeDefined();
  });

  it('Should have attribute defense', function () {
    const { sut } = makeSut();
    expect(sut.defense).toBeDefined();
  });

  it('Should have attribute energy', function () {
    const { sut } = makeSut();
    expect(sut.energy).toBeDefined();
  });

  it('Should have attribute dexterity', function () {
    const { sut } = makeSut();
    expect(sut.dexterity).toBeDefined();
  });

  it('Should call receiveDamage on the enemy pass as argument when attack method is called', function () {
    const { sut, simpleFighterStub } = makeSut();
    const receiveDamageSpy = jest.spyOn(simpleFighterStub, 'receiveDamage');
    sut.attack(simpleFighterStub);
    expect(receiveDamageSpy).toHaveBeenCalledWith(sut.strength);
  });

  it('Should increment lifePoints when levelUp is called', function () {
    const { sut } = makeSut();
    const lifePointsBeforeLevelUp = sut.lifePoints;
    sut.levelUp();
    expect(sut.lifePoints).toBeGreaterThan(lifePointsBeforeLevelUp);
  });

  it('Should set maxlifePoints to race maxLifePoints when goes over race maxLife', function () {
    const { sut } = makeSut();
    while (sut.lifePoints < 99) {
      sut.levelUp();
    }
    expect(sut.lifePoints).toBe(sut.race.maxLifePoints);
  });

  it('Should increment strength when levelUp is called', function () {
    const { sut } = makeSut();
    const strengthBeforeLevelUp = sut.strength;
    sut.levelUp();
    expect(sut.strength).toBeGreaterThan(strengthBeforeLevelUp);
  });

  it('Should increment dexterity when levelUp is called', function () {
    const { sut } = makeSut();
    const dexterityBeforeLevelUp = sut.dexterity;
    sut.levelUp();
    expect(sut.dexterity).toBeGreaterThan(dexterityBeforeLevelUp);
  });

  it('Should increment defense when levelUp is called', function () {
    const { sut } = makeSut();
    const defenseBeforeLevelUp = sut.defense;
    sut.levelUp();
    expect(sut.defense).toBeGreaterThan(defenseBeforeLevelUp);
  });

  it('Should set energy amount to 10 when levelUp is called', function () {
    const { sut } = makeSut();
    sut.levelUp();
    expect(sut.energy.amount).toBe(10);
  });
});
