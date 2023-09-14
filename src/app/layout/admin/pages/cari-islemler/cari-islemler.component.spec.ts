import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariIslemlerComponent } from './cari-islemler.component';

describe('CariIslemlerComponent', () => {
  let component: CariIslemlerComponent;
  let fixture: ComponentFixture<CariIslemlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CariIslemlerComponent]
    });
    fixture = TestBed.createComponent(CariIslemlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
