import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(
    private _name: string = 'Dragon',
  ) {
    super(999);
  }

  get name(): string {
    return this._name;
  }
}