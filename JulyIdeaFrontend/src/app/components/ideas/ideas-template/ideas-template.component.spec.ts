import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasTemplateComponent } from './ideas-template.component';

describe('IdeasTemplateComponent', () => {
  let component: IdeasTemplateComponent;
  let fixture: ComponentFixture<IdeasTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeasTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
