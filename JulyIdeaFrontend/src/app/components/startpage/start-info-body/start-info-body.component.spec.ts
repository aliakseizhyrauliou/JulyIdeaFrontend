import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInfoBodyComponent } from './start-info-body.component';

describe('StartInfoBodyComponent', () => {
  let component: StartInfoBodyComponent;
  let fixture: ComponentFixture<StartInfoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInfoBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartInfoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
