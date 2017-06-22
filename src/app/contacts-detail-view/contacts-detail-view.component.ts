import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from '../models/contact'
import {ActivatedRoute, Router} from '@angular/router'
import {Observable} from "rxjs";
import {EventBusService} from "../event-bus.service";
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../state-management/index";
import {SelectContactAction} from "../state-management/contacts/contacts-actions";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Observable<Contact>

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventBus: EventBusService,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit() {

    let id = this.route.snapshot.params['id']

    this.store.dispatch(new SelectContactAction(+id))

    this.contact = this.store.select(state => {

      let selectedContactId = state.contacts.selectedContactId
      return state.contacts.list.find(contact => contact.id === selectedContactId)

    })

    this.eventBus.emit('appTitleChange', 'Contacts Detail')

    //this.contact = this.contactsService.getContact(id)
    //.subscribe(() => this.eventBus.emit('appTitleChange', 'Contacts Detail'))

  }

  navigateToEditor() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  navigateToList() {
    this.router.navigate(['/contacts'])
    //this.router.navigate(['../'], {relativeTo: this.route})
  }

}
