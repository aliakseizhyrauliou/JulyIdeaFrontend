import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGroupsComponent } from './single-groups.component';

describe('SingleGroupsComponent', () => {
  let component: SingleGroupsComponent;
  let fixture: ComponentFixture<SingleGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
