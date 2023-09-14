import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariHesapIslemAdlariComponent } from './cari-hesap-islem-adlari.component';

describe('CariHesapIslemAdlariComponent', () => {
  let component: CariHesapIslemAdlariComponent;
  let fixture: ComponentFixture<CariHesapIslemAdlariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CariHesapIslemAdlariComponent]
    });
    fixture = TestBed.createComponent(CariHesapIslemAdlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
