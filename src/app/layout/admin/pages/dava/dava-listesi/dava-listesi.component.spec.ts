import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavaListesiComponent } from './dava-listesi.component';

describe('DavaListesiComponent', () => {
  let component: DavaListesiComponent;
  let fixture: ComponentFixture<DavaListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DavaListesiComponent]
    });
    fixture = TestBed.createComponent(DavaListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
