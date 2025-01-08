import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormPageComponent } from './event-form-page.component';

describe('EventFormPageComponent', () => {
  let component: EventFormPageComponent;
  let fixture: ComponentFixture<EventFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventFormPageComponent]
    });
    fixture = TestBed.createComponent(EventFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
