import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User;
  currRate: number;
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router:Router
  ) {}
  getCurrRate(): void {
    this.bitcoinService
      .getRate(1, 'USD')
      .subscribe((value) => (this.currRate = value));
  }
  get lastMoves() {
    return this.user.moves.slice(0,3);
  }
  ngOnInit(): void {
    this.user = this.userService.loggedUser
    if(!this.user)this.router.navigate(['signup'])
    this.getCurrRate()
  }
}
