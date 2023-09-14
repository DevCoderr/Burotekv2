import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesaplamaAraclariComponent } from './hesaplama-araclari.component';

describe('HesaplamaAraclariComponent', () => {
  let component: HesaplamaAraclariComponent;
  let fixture: ComponentFixture<HesaplamaAraclariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HesaplamaAraclariComponent]
    });
    fixture = TestBed.createComponent(HesaplamaAraclariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
