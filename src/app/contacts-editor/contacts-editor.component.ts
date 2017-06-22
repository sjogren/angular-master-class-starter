import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact: Contact = <Contact>{ address: {}};

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventBus: EventBusService
  ) {}

  ngOnInit() {

    this.eventBus.emit('appTitleChange', 'Contacts Editor')

    let id = this.route.snapshot.params['id']

    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact)

  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goToDetails())
  }

  cancel() {
    this.goToDetails()
  }

  private goToDetails() {
    //this.router.navigate(['/contacts', this.contact.id])
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
