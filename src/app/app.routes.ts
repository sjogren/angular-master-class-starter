import {Routes} from '@angular/router'
import {ContactsListComponent} from './contacts-list/contacts-list.component'
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component'
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";

export const APP_ROUTES: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorComponent},
  { path: '**', redirectTo: '/' }
]
