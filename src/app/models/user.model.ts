import Utils from '../utils/utils';
export class User {
  constructor(
    public name: string = '',
    public coins: number = 100,
    public moves: Array<Object> = [],
    public _id?: string,
  ) {}

  setId?() {
    this._id = Utils.genID(25);
  }
}
