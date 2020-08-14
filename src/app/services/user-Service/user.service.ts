import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { Move } from '../../interfaces/move.interface';
import Utils from '../../utils/utils';
import { BitcoinService } from '../bitcoin-service/bitcoin.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: User[] = Utils.loadFromStorage('users') || [];
  public loggedUser: User = Utils.loadFromStorage('loggedUser') || null;
  constructor(private bitcoinService: BitcoinService) {}
  getUser(_id: string): User {
    const user = this._users.find((user) => user._id === _id);
    return user;
  }
  async addMove(contact: Contact, amount: number) {
    const transferAction: Move = {
      fromId: this.loggedUser._id,
      toName: contact.name,
      amount,
      completedAt: Date.now(),
      rateAtTransfer: Math.random().toFixed(8),
    };

    this.loggedUser.coins -= amount;
    this.loggedUser.moves.unshift(transferAction);
    Utils.saveToStorage('loggedUser', this.loggedUser);
    const idx = this._users.findIndex((u) => u._id === this.loggedUser._id);
    this._users.splice(idx, 1, this.loggedUser);
    Utils.saveToStorage('users', this._users);
  }
  signup({ username, phone, email }) {
    const newUser = new User(username, phone, email);
    newUser.setId();
    console.log('new created user:', newUser);
    this._users.push(newUser);
    Utils.saveToStorage('users', this._users);
    this.login(username);
  }
  login(name: string): User {
    const user = this._users.find((u) => u.name === name);
    if (user) {
      this.loggedUser = user;
      Utils.saveToStorage('loggedUser', user);
      return this.loggedUser;
    }
  }
  logout(): void {
    this.loggedUser = null;
    Utils.removeFromStorage('loggedUser');
  }
}
