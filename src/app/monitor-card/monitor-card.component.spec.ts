import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCardComponent } from './monitor-card.component';

describe('MonitorCardComponent', () => {
  let component: MonitorCardComponent;
  let fixture: ComponentFixture<MonitorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
