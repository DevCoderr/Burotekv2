import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaIslemleriComponent } from './fatura-islemleri.component';

describe('FaturaIslemleriComponent', () => {
  let component: FaturaIslemleriComponent;
  let fixture: ComponentFixture<FaturaIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturaIslemleriComponent]
    });
    fixture = TestBed.createComponent(FaturaIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
