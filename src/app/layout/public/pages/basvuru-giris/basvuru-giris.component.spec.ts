import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasvuruGirisComponent } from './basvuru-giris.component';

describe('BasvuruGirisComponent', () => {
  let component: BasvuruGirisComponent;
  let fixture: ComponentFixture<BasvuruGirisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasvuruGirisComponent]
    });
    fixture = TestBed.createComponent(BasvuruGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
