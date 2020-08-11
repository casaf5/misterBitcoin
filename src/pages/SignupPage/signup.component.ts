import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  username = '';
  signup(): void {
    if (this.username === '') return;
    this.userService.signup(this.username);
    this.router.navigate(['home'])
  }
  login():void{
    if (this.username === '') return;
    this.userService.login(this.username);
    this.router.navigate(['home'])
  }
  ngOnInit(): void {}
}
