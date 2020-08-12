import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/ContactService/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts:Contact[];

  filterContacts(filterBy = null): void {
  this.contactService.loadContacts(filterBy);
  }
  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contactService.contacts$.subscribe((c) => (this.contacts = c));
  }
}
