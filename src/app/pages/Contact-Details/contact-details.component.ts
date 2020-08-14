import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from 'src/app/services/contact-service/contact.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { Move } from 'src/app/interfaces/move.interface';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService,
    private userService: UserService
  ) {}

  contactToShow;
  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService
      .getContactById(id)
      .subscribe((c) => (this.contactToShow = c));
  }
  goBack(): void {
    this.location.back();
  }
  get userTransactions(): any[] {
    const user :User= this.userService.loggedUser;
    return user.moves.filter((move:Move) => move.toName === this.contactToShow.name);
  }
  ngOnInit(): void {
    this.getContact();
  }
}
