import { PVP } from "../../Battle";
import Character from "../../Character";
import { makeOrcWarrior } from "../../Factories";
import newOrc from "../../Factories/Orc-factory";

const makeSut = (): PVP => {
  const ElfMageStub = new Character('ElfMageStub');
  const OrcWarriotStub = makeOrcWarrior('OrcWarriorStub')
  return new PVP(ElfMageStub, OrcWarriotStub);
}

describe('PVP Class', () => {
  it('Should have a fight method', () => {
    const sut = makeSut();
    expect(sut.fight).toBeDefined()
  });

  it('Should have a playRound method', () => {
    const sut = makeSut();
    expect(sut.playRound).toBeDefined()
  });

  it('Should call playRound method when fight method is called', () => {
    const sut = makeSut();
    const playRoundSpy = jest.spyOn(sut, 'playRound');
    sut.fight();
    expect(playRoundSpy).toHaveBeenCalled();
  })
})
