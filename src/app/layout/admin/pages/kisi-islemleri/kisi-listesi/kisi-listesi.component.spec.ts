import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisiListesiComponent } from './kisi-listesi.component';

describe('KisiListesiComponent', () => {
  let component: KisiListesiComponent;
  let fixture: ComponentFixture<KisiListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KisiListesiComponent]
    });
    fixture = TestBed.createComponent(KisiListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
