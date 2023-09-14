import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariIslemGecmisiComponent } from './cari-islem-gecmisi.component';

describe('CariIslemGecmisiComponent', () => {
  let component: CariIslemGecmisiComponent;
  let fixture: ComponentFixture<CariIslemGecmisiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CariIslemGecmisiComponent]
    });
    fixture = TestBed.createComponent(CariIslemGecmisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
