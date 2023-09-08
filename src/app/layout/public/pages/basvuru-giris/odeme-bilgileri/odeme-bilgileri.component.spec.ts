import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdemeBilgileriComponent } from './odeme-bilgileri.component';

describe('OdemeBilgileriComponent', () => {
  let component: OdemeBilgileriComponent;
  let fixture: ComponentFixture<OdemeBilgileriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdemeBilgileriComponent]
    });
    fixture = TestBed.createComponent(OdemeBilgileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
