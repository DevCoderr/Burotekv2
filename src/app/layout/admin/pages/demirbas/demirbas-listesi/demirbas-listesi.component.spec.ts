import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasListesiComponent } from './demirbas-listesi.component';

describe('DemirbasListesiComponent', () => {
  let component: DemirbasListesiComponent;
  let fixture: ComponentFixture<DemirbasListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemirbasListesiComponent]
    });
    fixture = TestBed.createComponent(DemirbasListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
