import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleplerComponent } from './talepler.component';

describe('TaleplerComponent', () => {
  let component: TaleplerComponent;
  let fixture: ComponentFixture<TaleplerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaleplerComponent]
    });
    fixture = TestBed.createComponent(TaleplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
