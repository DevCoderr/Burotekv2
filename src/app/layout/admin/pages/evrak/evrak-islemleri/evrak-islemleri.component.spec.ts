import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvrakIslemleriComponent } from './evrak-islemleri.component';

describe('EvrakIslemleriComponent', () => {
  let component: EvrakIslemleriComponent;
  let fixture: ComponentFixture<EvrakIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvrakIslemleriComponent]
    });
    fixture = TestBed.createComponent(EvrakIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
