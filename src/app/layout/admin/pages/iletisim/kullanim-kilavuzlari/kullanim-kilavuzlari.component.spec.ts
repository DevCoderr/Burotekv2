import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanimKilavuzlariComponent } from './kullanim-kilavuzlari.component';

describe('KullanimKilavuzlariComponent', () => {
  let component: KullanimKilavuzlariComponent;
  let fixture: ComponentFixture<KullanimKilavuzlariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KullanimKilavuzlariComponent]
    });
    fixture = TestBed.createComponent(KullanimKilavuzlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
