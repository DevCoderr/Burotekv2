import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumIslemleriComponent } from './kurum-islemleri.component';

describe('KurumIslemleriComponent', () => {
  let component: KurumIslemleriComponent;
  let fixture: ComponentFixture<KurumIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurumIslemleriComponent]
    });
    fixture = TestBed.createComponent(KurumIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
