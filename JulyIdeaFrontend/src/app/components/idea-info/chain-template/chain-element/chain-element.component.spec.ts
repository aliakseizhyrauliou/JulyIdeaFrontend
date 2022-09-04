import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainElementComponent } from './chain-element.component';

describe('ChainElementComponent', () => {
  let component: ChainElementComponent;
  let fixture: ComponentFixture<ChainElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
