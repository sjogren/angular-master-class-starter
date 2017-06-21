import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>

  ngOnInit() {}

  ngAfterContentInit() {
    this.select(this.tabs.first)
  }

  select(tab: TabComponent) {
    this.tabs.forEach(tabby => tabby.selected = (tabby === tab))
  }

}
