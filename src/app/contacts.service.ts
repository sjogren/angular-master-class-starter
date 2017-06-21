import { Injectable } from '@angular/core';
import {Contact} from './models/contact'
import {Http} from '@angular/http'
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201/api'

  constructor(private http: Http) {}

  getContacts(): Observable<Array<Contact>> {

    return this.http.get(this.API_ENDPOINT + '/contacts')
      .map(res => res.json())
      .map(data => data.items)

  }

  getContact(id: string): Observable<Contact> {

    return this.http.get(this.API_ENDPOINT + '/contacts/' + id)
      .map(res => res.json())
      .map(data => data.item)

  }

  updateContact(contact: Contact) {
    return this.http.put(this.API_ENDPOINT + '/contacts/' + contact.id, contact)
  }

  search(term: string): Observable<Array<Contact>> {
    return this.http.get(this.API_ENDPOINT + '/search?text=' + term)
      .map(res => res.json())
      .map(data => data.items)
  }

}
