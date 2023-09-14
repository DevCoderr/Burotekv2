import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartFaizlerComponent } from './standart-faizler.component';

describe('StandartFaizlerComponent', () => {
  let component: StandartFaizlerComponent;
  let fixture: ComponentFixture<StandartFaizlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandartFaizlerComponent]
    });
    fixture = TestBed.createComponent(StandartFaizlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
