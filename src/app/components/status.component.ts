import {Component, OnInit, Inject} from '@angular/core';
import {APP_STORE, Store} from '../store/store'
import {ApplicationState} from "../store/root-reducer";

@Component({
  selector: 'trm-status',
  template: `
    {{ state.votes.counter }}
    <div class="tip">All Votes!</div>
  `,
  styles : [
    `:host {  text-align:center; font-size:1.1em; font-weight: bolder  }`,
    `.tip { font-size:0.7em; padding-top:5px;font-weight: normal;  }`
  ]
})
export class StatusComponent implements OnInit {

  private state

  constructor(@Inject(APP_STORE) private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.state = this.store.getState();

    this.store.subscribe(() => {
      this.state = this.store.getState();
    })
  }


}

