import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts: Contact[];

  filterContacts(filterBy = null): void {
    this.contactService.loadContacts(filterBy);
  }
  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contactService.contacts$.subscribe((c) => {
      this.contacts = c.map((contact) => {
        return {
          _id: contact._id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          profilePic: contact.profilePic = `https://robohash.org/${contact.name}?set=set5`,
        };
      });
    });
  }
}
