import Utils from '../utils/utils';
export class Contact {
  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public gender: string = 'men',
    public profile_pic: string = ''
  ) {}

  setId?() {
    this._id = Utils.genID(25);
  }
  setProfilePic?(num:number){
    this.profile_pic=`https://randomuser.me/api/portraits/${this.gender}/${num}.jpg`
  }
}
