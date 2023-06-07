import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatoComponent } from './chato.component';

describe('ChatoComponent', () => {
  let component: ChatoComponent;
  let fixture: ComponentFixture<ChatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
