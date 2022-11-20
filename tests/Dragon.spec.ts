import Dragon from '../src/Dragon';

const makeSut = (): Dragon => new Dragon();

describe('Dragon Class', function () {
  it('Should have lifePoints set to 999', function () {
    const sut = makeSut();
    expect(sut.lifePoints).toBe(999);
  });

  it('Should have name set to Dragon', function () {
    const sut = makeSut();
    expect(sut.name).toBe('Dragon');
  });
});
