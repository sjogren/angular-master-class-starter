import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from '../models/contact'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    let id = this.route.snapshot.params['id']

    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact)

  }

  navigateToEditor() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  navigateToList() {
    this.router.navigate(['/contacts'])
    //this.router.navigate(['../'], {relativeTo: this.route})
  }

}
