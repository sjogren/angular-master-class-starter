import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from '../models/contact'
import {ActivatedRoute, Router} from '@angular/router'
import {Observable} from "rxjs";

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
    private router: Router
  ) {}

  ngOnInit() {

    let id = this.route.snapshot.params['id']
    this.contact = this.contactsService.getContact(id)

  }

  navigateToEditor() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  navigateToList() {
    this.router.navigate(['/contacts'])
    //this.router.navigate(['../'], {relativeTo: this.route})
  }

}
