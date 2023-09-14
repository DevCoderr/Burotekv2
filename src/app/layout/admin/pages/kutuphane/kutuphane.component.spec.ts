import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneComponent } from './kutuphane.component';

describe('KutuphaneComponent', () => {
  let component: KutuphaneComponent;
  let fixture: ComponentFixture<KutuphaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KutuphaneComponent]
    });
    fixture = TestBed.createComponent(KutuphaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
