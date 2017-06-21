import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditorComponent } from './contacts-editor.component';

describe('ContactsEditorComponent', () => {
  let component: ContactsEditorComponent;
  let fixture: ComponentFixture<ContactsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
