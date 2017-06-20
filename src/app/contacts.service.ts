import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'

@Injectable()
export class ContactsService {

  getContacts() {
    return CONTACT_DATA
  }

}
