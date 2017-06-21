import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailViewComponent } from './contacts-detail-view.component';

describe('ContactsDetailViewComponent', () => {
  let component: ContactsDetailViewComponent;
  let fixture: ComponentFixture<ContactsDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
