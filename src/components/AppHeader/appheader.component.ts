import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss'],
})
export class AppheaderComponent implements OnInit {
  isLogged: boolean;
  constructor(private userService: UserService, private router: Router) {}
  logout(): void {
    this.userService.logout();
    this.isLogged=false;
    this.router.navigate(['signup']);
  }
  ngOnInit(): void {
    if (this.userService.loggedUser) this.isLogged = true;
  }
}
