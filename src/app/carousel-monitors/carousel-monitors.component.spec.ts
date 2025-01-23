import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMonitorsComponent } from './carousel-monitors.component';

describe('CarouselMonitorsComponent', () => {
  let component: CarouselMonitorsComponent;
  let fixture: ComponentFixture<CarouselMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMonitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
