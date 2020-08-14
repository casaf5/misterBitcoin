import Utils from '../utils/utils';
export class Contact {
  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public profilePic: string = ''
  ) {}

  setId?() {
    this._id = Utils.genID(25);
  }
  setProfilePic?(){
    this.profilePic=`https://robohash.org/${this.name}?set=set5`
  }
}
