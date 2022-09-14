import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIdeasTemplateComponent } from './group-ideas-template.component';

describe('GroupIdeasTemplateComponent', () => {
  let component: GroupIdeasTemplateComponent;
  let fixture: ComponentFixture<GroupIdeasTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupIdeasTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupIdeasTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
