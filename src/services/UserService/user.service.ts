import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Contact } from 'src/models/contact.model';
import { Move } from '../../interfaces/move.interface';
import Utils from '../../utils/utils';
import utils from '../../utils/utils';

const USERS = [
  {
    _id: 'IDJSFISDJ23949DSFJ',
    name: 'Asaf Cohen',
    coins: 1000,
    moves: [
      {
        from_id: 'IDJSFISDJ23949DSFJ',
        to_name: 'YOU CANT SEE ME',
        amount: 50,
        completedAt: 1597149688592,
      },
      {
        from_id: 'IDJSFISDJ23949DSFJ',
        to_name: 'Faulkner Flores',
        amount: 50,
        completedAt: 1597149688592,
      },
      {
        from_id: 'IDJSFISDJ23949DSFJ',
        to_name: 'Faulkner Flores',
        amount: 50,
        completedAt: 1597149688592,
      },
      {
        from_id: 'IDJSFISDJ23949DSFJ',
        to_name: 'BUT ME YOU CAN',
        amount: 50,
        completedAt: 1597149688592,
      },
    ],
  },
];
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: User[] = Utils.loadFromLocal('users') || USERS;
  // private _users: User[] = USERS;
  public loggedUser: User = Utils.loadFromLocal('loggedUser') || null;
  constructor() {}
  getUser(_id: string): User {
    const user = this._users.find((user) => user._id === _id);
    return user;
  }
  addMove(contact: Contact, amount: number): void {
    const transferAction: Move = {
      from_id: this.loggedUser._id,
      to_name: contact.name,
      amount,
      completedAt: Date.now(),
    };
    this.loggedUser.coins -= amount;
    this.loggedUser.moves.push(transferAction);
    Utils.saveToLocal('loggedUser', this.loggedUser);
    const idx = this._users.findIndex((u) => u._id === this.loggedUser._id);
    this._users.splice(idx, 0, this.loggedUser);
    Utils.saveToLocal('users', this._users);
  }
  signup(name: string) {
    const newUser = new User(name);
    newUser.setId();
    this._users.push(newUser);
    Utils.saveToLocal('users', this._users);
    this.login(name);
  }
  login(name: string): User {
    const user = this._users.find((u) => u.name === name);
    if (user) {
      this.loggedUser = user;
      Utils.saveToLocal('loggedUser', user);
      return this.loggedUser;
    }
  }
}
