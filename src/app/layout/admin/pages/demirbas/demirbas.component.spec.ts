import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasComponent } from './demirbas.component';

describe('DemirbasComponent', () => {
  let component: DemirbasComponent;
  let fixture: ComponentFixture<DemirbasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemirbasComponent]
    });
    fixture = TestBed.createComponent(DemirbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
