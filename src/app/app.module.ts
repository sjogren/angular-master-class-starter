import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from "@angular/router";
import {HttpModule} from '@angular/http'

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component'
import {APP_ROUTES} from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component'

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
