import {createStore, combineReducers, Store} from 'redux'
import {ROOT_REDUCER, ApplicationState} from './root-reducer'
import {InjectionToken} from "@angular/core";

export const appStoreFactory = (): Store<ApplicationState> => {
  return createStore(combineReducers(ROOT_REDUCER)) as Store<ApplicationState>
}

export const APP_STORE = new InjectionToken('app-store')

export const APP_STORE_PROVIDER = {provide: APP_STORE, useFactory: appStoreFactory}
