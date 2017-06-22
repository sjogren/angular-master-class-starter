import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {EventBusService} from "../event-bus.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../state-management/index";
import {Observable} from "rxjs";
import {UpdateContactAction} from "../state-management/contacts/contacts-actions";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact$: Observable<Contact>

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventBus: EventBusService,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit() {

    this.eventBus.emit('appTitleChange', 'Contacts Editor')

    let id = this.route.snapshot.params['id']

    this.contact$ = this.store.select(state => {

      let selectedContactId = state.contacts.selectedContactId
      let selectedContact = state.contacts.list.find(contact => contact.id === selectedContactId)
      return Object.assign({}, selectedContact)

    })

    //this.contactsService.getContact(id)
    //  .subscribe(contact => this.contact$ = contact)

  }

  save(contact: Contact) {

    this.store.dispatch(new UpdateContactAction(contact))
    this.goToDetails()

    //this.contactsService.updateContact(contact)
    //  .subscribe(() => this.goToDetails())

  }

  cancel() {
    this.goToDetails()
  }

  private goToDetails() {
    //this.router.navigate(['/contacts', this.contact.id])
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
