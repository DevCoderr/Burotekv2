import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciIslemleriComponent } from './kullanici-islemleri.component';

describe('KullaniciIslemleriComponent', () => {
  let component: KullaniciIslemleriComponent;
  let fixture: ComponentFixture<KullaniciIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KullaniciIslemleriComponent]
    });
    fixture = TestBed.createComponent(KullaniciIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
