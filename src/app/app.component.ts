import { Component } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'
import { Contact } from './models/contact'

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {

  contacts: Contact[] = CONTACT_DATA

  trackByContacts(index: number, contact: Contact): number | string {
    return contact.id
  }

}
