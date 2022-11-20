import { PVP } from '../../src/Battle';
import Character from '../../src/Character';
import { makeOrcWarrior } from '../../src/Factories';

const makeSut = (): PVP => {
  const ElfMageStub = new Character('ElfMageStub');
  const OrcWarriotStub = makeOrcWarrior('OrcWarriorStub');
  return new PVP(ElfMageStub, OrcWarriotStub);
};

describe('PVP Class', function () {
  it('Should have a fight method', function () {
    const sut = makeSut();
    expect(sut.fight).toBeDefined();
  });

  it('Should have a playRound method', function () {
    const sut = makeSut();
    expect(sut.playRound).toBeDefined();
  });

  it('Should call playRound method when fight method is called', function () {
    const sut = makeSut();
    const playRoundSpy = jest.spyOn(sut, 'playRound');
    sut.fight();
    expect(playRoundSpy).toHaveBeenCalled();
  });
});
