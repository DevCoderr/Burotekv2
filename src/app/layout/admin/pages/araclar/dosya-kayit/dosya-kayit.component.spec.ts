import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosyaKayitComponent } from './dosya-kayit.component';

describe('DosyaKayitComponent', () => {
  let component: DosyaKayitComponent;
  let fixture: ComponentFixture<DosyaKayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosyaKayitComponent]
    });
    fixture = TestBed.createComponent(DosyaKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
