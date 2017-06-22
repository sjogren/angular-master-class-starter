import {createStore, combineReducers} from 'redux'
import {ROOT_REDUCER} from './root-reducer'
import {InjectionToken} from "@angular/core";

export interface Action {
  type: any
}
export interface Unsubscribe {
  (): void
}
export interface Dispatch<S> {
  <A extends Action>(action: A): A
}

export interface Store<S> {
  getState(): S
  dispatch: (action) => void
  subscribe(listener: () => void): Unsubscribe
}

export const appStoreFactory = () => {
  return createStore(combineReducers(ROOT_REDUCER))
}

export const APP_STORE = new InjectionToken('app-store')
