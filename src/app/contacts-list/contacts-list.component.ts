import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact'
import {ContactsService} from "../contacts.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Array<Contact>>
  private terms$ = new Subject<string>()

  constructor(private contactsService: ContactsService) {}

  trackByContacts(index: number, contact: Contact): number | string {
    return contact.id
  }

  ngOnInit() {

    this.contacts = this.contactsService.getContacts()

    this.terms$.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term))


  }

  search(term: string) {
    this.contacts = this.contactsService.search(term)
  }

}
