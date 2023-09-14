import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneListesiComponent } from './kutuphane-listesi.component';

describe('KutuphaneListesiComponent', () => {
  let component: KutuphaneListesiComponent;
  let fixture: ComponentFixture<KutuphaneListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KutuphaneListesiComponent]
    });
    fixture = TestBed.createComponent(KutuphaneListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
