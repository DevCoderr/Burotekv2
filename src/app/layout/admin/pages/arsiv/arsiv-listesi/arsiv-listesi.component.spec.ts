import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivListesiComponent } from './arsiv-listesi.component';

describe('ArsivListesiComponent', () => {
  let component: ArsivListesiComponent;
  let fixture: ComponentFixture<ArsivListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArsivListesiComponent]
    });
    fixture = TestBed.createComponent(ArsivListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
