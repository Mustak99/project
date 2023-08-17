import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMachineComponent } from './online-machine.component';

describe('OnlineMachineComponent', () => {
  let component: OnlineMachineComponent;
  let fixture: ComponentFixture<OnlineMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineMachineComponent]
    });
    fixture = TestBed.createComponent(OnlineMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
