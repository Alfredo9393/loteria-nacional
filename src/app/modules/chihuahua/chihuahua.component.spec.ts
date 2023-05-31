import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChihuahuaComponent } from './chihuahua.component';

describe('ChihuahuaComponent', () => {
  let component: ChihuahuaComponent;
  let fixture: ComponentFixture<ChihuahuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChihuahuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChihuahuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
