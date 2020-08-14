import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferfundComponent implements OnInit {
  @Input() toContact: Contact;
  constructor(private userService: UserService,private bitcoinService:BitcoinService, private router: Router) {}
  coinsToTransfer: number;
  rateAtTransfer:number;
  loggedUser: User;
  errorMsg: string;
  onTransferCoins():void {
    if (!this.coinsToTransfer) return;
    if (this.coinsToTransfer > this.loggedUser.coins) {
      this.errorMsg = 'Insufficient funds. Your Not That Rich :)';
      setTimeout(() => (this.errorMsg = null), 3000);
      return;
    }
    this.userService.addMove(this.toContact, this.coinsToTransfer);
    this.router.navigate(['home']);
  }
  
  ngOnInit(): void {
    this.loggedUser = this.userService.loggedUser;
  }
}
