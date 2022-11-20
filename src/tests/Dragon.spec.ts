import Dragon from "../Dragon";

const makeSut = (): Dragon => {
  return new Dragon();
}

describe('Dragon Class', () => {
  it('Should have lifePoints set to 999', () => {
    const sut = makeSut();
    expect(sut.lifePoints).toBe(999);
  })
})
