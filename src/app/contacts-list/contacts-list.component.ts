import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact'
import {ContactsService} from "../contacts.service";
import {Observable} from "rxjs";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<any>

  constructor(private contactsService: ContactsService) {}

  trackByContacts(index: number, contact: Contact): number | string {
    return contact.id
  }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

}
