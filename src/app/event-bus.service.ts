import { Injectable } from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs'

@Injectable()
export class EventBusService {

  private messages = new Subject<EventBusArgs>()

  constructor() {}

  emit(eventType: string, data: any) {
    this.messages.next(new EventBusArgs(eventType, data))
  }

  observe(eventType: string): Observable<any> {
    return this.messages
      .filter((event) => event.type === eventType)
      .map((event) => event.data)
  }

}

class EventBusArgs {

  constructor(
    public type: string,
    public data: any
  ) {}

}
