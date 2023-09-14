import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarilerComponent } from './cariler.component';

describe('CarilerComponent', () => {
  let component: CarilerComponent;
  let fixture: ComponentFixture<CarilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarilerComponent]
    });
    fixture = TestBed.createComponent(CarilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
