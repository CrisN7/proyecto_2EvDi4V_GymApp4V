import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddActivityComponent } from './form-add-activity.component';

describe('FormAddActivityComponent', () => {
  let component: FormAddActivityComponent;
  let fixture: ComponentFixture<FormAddActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
