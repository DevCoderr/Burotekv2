import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurusmaListesiComponent } from './durusma-listesi.component';

describe('DurusmaListesiComponent', () => {
  let component: DurusmaListesiComponent;
  let fixture: ComponentFixture<DurusmaListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurusmaListesiComponent]
    });
    fixture = TestBed.createComponent(DurusmaListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
