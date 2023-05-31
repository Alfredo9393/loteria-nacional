import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuadalajaraComponent } from './guadalajara.component';

describe('GuadalajaraComponent', () => {
  let component: GuadalajaraComponent;
  let fixture: ComponentFixture<GuadalajaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuadalajaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuadalajaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
