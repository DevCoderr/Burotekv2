import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OduncYayinlarListesiComponent } from './odunc-yayinlar-listesi.component';

describe('OduncYayinlarListesiComponent', () => {
  let component: OduncYayinlarListesiComponent;
  let fixture: ComponentFixture<OduncYayinlarListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OduncYayinlarListesiComponent]
    });
    fixture = TestBed.createComponent(OduncYayinlarListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
