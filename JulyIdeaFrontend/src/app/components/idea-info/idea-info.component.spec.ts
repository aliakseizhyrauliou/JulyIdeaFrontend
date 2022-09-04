import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaInfoComponent } from './idea-info.component';

describe('IdeaInfoComponent', () => {
  let component: IdeaInfoComponent;
  let fixture: ComponentFixture<IdeaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
