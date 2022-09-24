import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTemplateComponent } from './messages-template.component';

describe('MessagesTemplateComponent', () => {
  let component: MessagesTemplateComponent;
  let fixture: ComponentFixture<MessagesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
