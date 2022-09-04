import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainTemplateComponent } from './chain-template.component';

describe('ChainTemplateComponent', () => {
  let component: ChainTemplateComponent;
  let fixture: ComponentFixture<ChainTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
