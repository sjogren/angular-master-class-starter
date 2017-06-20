import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201/api'

  constructor(private http: Http) {}

  getContacts() {

    return this.http.get(this.API_ENDPOINT + '/contacts')
      .map(res => res.json())
      .map(data => data.items)

  }

  getContact(id: string) {
    return CONTACT_DATA.find((contact) => contact.id.toString() === id)
  }

}
