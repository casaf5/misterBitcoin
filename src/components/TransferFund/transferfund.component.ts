import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/services/UserService/user.service';
import { User } from 'src/models/user.model';
import { Contact } from 'src/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transferfund.component.html',
  styleUrls: ['./transferfund.component.scss'],
})
export class TransferfundComponent implements OnInit {
  @Input() fromContact: Contact;
  constructor(private userService: UserService, private router: Router) {}
  coinsToTransfer: number;
  loggedUser: User;
  errorMsg: string;
  onTransferCoins(): void {
    if (!this.coinsToTransfer) return;
    if (this.coinsToTransfer > this.loggedUser.coins) {
      this.errorMsg = 'Insufficient funds. Your Not That Rich :)';
      setTimeout(() => (this.errorMsg = null), 3000);
      return;
    }
    this.userService.addMove(this.fromContact, this.coinsToTransfer);
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    this.loggedUser = this.userService.loggedUser;
  }
}
