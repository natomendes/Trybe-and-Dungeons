import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(
    private points: number = 999,
    private _name: string = 'Dragon',
  ) {
    super(points);
  }

  get name(): string {
    return this._name;
  }
}