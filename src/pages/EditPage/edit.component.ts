import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/ContactService/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  contactToEdit: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) {}
  saveContact(): void {
    this.contactService.saveContact(this.contactToEdit);
    this.location.back();
  }
  removeContact(): void {
    this.contactService.deleteContact(this.contactToEdit._id);
    this.location.go('contact')
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.contactService
          .getContactById(params.id)
          .subscribe((contact) => (this.contactToEdit = contact));
      } else {
        this.contactToEdit = new Contact();
      }
    });
  }
}
