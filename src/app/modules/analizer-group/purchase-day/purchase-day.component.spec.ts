import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDayComponent } from './purchase-day.component';

describe('PurchaseDayComponent', () => {
  let component: PurchaseDayComponent;
  let fixture: ComponentFixture<PurchaseDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
