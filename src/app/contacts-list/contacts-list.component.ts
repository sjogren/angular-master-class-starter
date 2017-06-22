import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact'
import {ContactsService} from "../contacts.service";
import {Observable, Subject} from "rxjs";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Array<Contact>>
  private term$ = new Subject<string>()

  constructor(
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) {}

  trackByContacts(index: number, contact: Contact): number | string {
    return contact.id
  }

  ngOnInit() {

    this.eventBus.emit('appTitleChange', 'Contacts')

    let initialContactsObservable = this.contactsService.getContacts()

    let searchedContactsObservable = this.term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.search(term))

    this.contacts = Observable.merge(
      initialContactsObservable.delay(150).takeUntil(searchedContactsObservable),
      searchedContactsObservable
    )

  }

  search(term: string)  {
    return this.contactsService.search(term)
  }

}
