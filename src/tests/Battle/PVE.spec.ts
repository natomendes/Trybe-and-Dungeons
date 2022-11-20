import { PVE } from "../../Battle";
import Character from "../../Character";
import { makeOrcWarrior } from "../../Factories";
import Monster from "../../Monster";

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
  }
}

describe('PVE Class', () => {
  it('Should have a fight method', () => {
    const { sut } = makeSut();
    expect(sut.fight).toBeDefined();
  });

  it('Should have a static rollDice method', () => {
    expect(PVE.rollDice).toBeDefined();
  });

  it('Should have a matchUp method', () => {
    const { sut } = makeSut();
    expect(sut.matchUp).toBeDefined();
  });

  it('Should have a playRound method', () => {
    const { sut } = makeSut();
    expect(sut.playRound).toBeDefined();
  });

  it('Should call playRound with the right value', () => {
    const { sut, monsterStub } = makeSut();
    const playRounsSpy = jest.spyOn(sut, 'playRound');
    sut.fight();
    expect(playRounsSpy).toHaveBeenCalledWith(monsterStub);
  });
})
