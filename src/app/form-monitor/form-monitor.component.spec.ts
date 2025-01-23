import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonitorComponent } from './form-monitor.component';

describe('FormMonitorComponent', () => {
  let component: FormMonitorComponent;
  let fixture: ComponentFixture<FormMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
