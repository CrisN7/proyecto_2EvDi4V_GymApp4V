import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorsMainComponent } from './monitors-main.component';

describe('MonitorsMainComponent', () => {
  let component: MonitorsMainComponent;
  let fixture: ComponentFixture<MonitorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
