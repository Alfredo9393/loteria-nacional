import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGroupComponent } from './compare-group.component';

describe('CompareGroupComponent', () => {
  let component: CompareGroupComponent;
  let fixture: ComponentFixture<CompareGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
