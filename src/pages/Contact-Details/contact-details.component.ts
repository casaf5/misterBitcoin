import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from 'src/services/ContactService/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService
  ) {}

  contactToShow;
  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService
      .getContactById(id)
      .subscribe((c) => (this.contactToShow = c));
  }
  goBack():void{
    this.location.back()
  }
  ngOnInit(): void {
    this.getContact()
  }
}
