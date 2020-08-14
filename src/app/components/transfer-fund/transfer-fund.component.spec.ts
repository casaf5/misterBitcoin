import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferfundComponent } from './transfer-fund.component';

describe('TransferfundComponent', () => {
  let component: TransferfundComponent;
  let fixture: ComponentFixture<TransferfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
