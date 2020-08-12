import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  registerUser = '';
  loginUser = '';
  errorMsg = { show: false, text: 'Cant Find User, Please try again..' };
  signup(): void {
    if (this.registerUser === '') return;
    this.userService.signup(this.registerUser);
    this.router.navigate(['home']);
  }
  login(): void {
    if (this.loginUser === '') return;
    const user = this.userService.login(this.loginUser);
    if (user) {
      this.router.navigate(['home']);
    } else {
      this.errorMsg.show = true;
      setTimeout(() => (this.errorMsg.show = false), 3000);
    }
  }
  ngOnInit(): void {}
}
