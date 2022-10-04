import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTextareaComponent } from './messages-textarea.component';

describe('MessagesTextareaComponent', () => {
  let component: MessagesTextareaComponent;
  let fixture: ComponentFixture<MessagesTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
