import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciTercihleriComponent } from './kullanici-tercihleri.component';

describe('KullaniciTercihleriComponent', () => {
  let component: KullaniciTercihleriComponent;
  let fixture: ComponentFixture<KullaniciTercihleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KullaniciTercihleriComponent]
    });
    fixture = TestBed.createComponent(KullaniciTercihleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
