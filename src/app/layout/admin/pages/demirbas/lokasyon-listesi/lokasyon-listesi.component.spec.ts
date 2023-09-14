import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasyonListesiComponent } from './lokasyon-listesi.component';

describe('LokasyonListesiComponent', () => {
  let component: LokasyonListesiComponent;
  let fixture: ComponentFixture<LokasyonListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LokasyonListesiComponent]
    });
    fixture = TestBed.createComponent(LokasyonListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
