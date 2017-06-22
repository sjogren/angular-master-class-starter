import {Action} from '@ngrx/store'
import {Contact} from '../../models/contact'

export namespace ContactsActionTypes {
  export const LOAD_CONTACTS_SUCCESS = '[Contacts] Load Contacts Success'
}

export type ContactsActions = LoadContactsSuccessAction

export class LoadContactsSuccessAction implements Action {

  readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS

  constructor(public payload: Array<Contact>) { }

}
