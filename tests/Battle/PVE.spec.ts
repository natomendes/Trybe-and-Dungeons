/* eslint-disable max-lines-per-function */
import { PVE } from '../../src/Battle';
import Character from '../../src/Character';
import { makeOrcWarrior } from '../../src/Factories';
import Monster from '../../src/Monster';

interface SutTypes {
  sut: PVE 
  monsterStub: Monster
}

const makeSut = (): SutTypes => {
  const monsterStub = new Monster();
  const OrcWarriotStub = makeOrcWarrior('OrcWarriorStub');
  const ElfMageStub = new Character('ElfMageStub');  
  const sut = new PVE(ElfMageStub, [monsterStub, OrcWarriotStub]);
  return {
    sut,
    monsterStub,
  };
};

describe('PVE Class', function () {
  it('Should have a fight method', function () {
    const { sut } = makeSut();
    expect(sut.fight).toBeDefined();
  });

  it('Should have a static rollDice method', function () {
    expect(PVE.rollDice).toBeDefined();
  });

  it('Should have a matchUp method', function () {
    const { sut } = makeSut();
    expect(sut.matchUp).toBeDefined();
  });

  it('Should have a playRound method', function () {
    const { sut } = makeSut();
    expect(sut.playRound).toBeDefined();
  });

  it('Should call playRound with the right value', function () {
    const { sut, monsterStub } = makeSut();
    const playRounsSpy = jest.spyOn(sut, 'playRound');
    sut.fight();
    expect(playRounsSpy).toHaveBeenCalledWith(monsterStub);
  });
});
