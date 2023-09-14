import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilekcelerComponent } from './dilekceler.component';

describe('DilekcelerComponent', () => {
  let component: DilekcelerComponent;
  let fixture: ComponentFixture<DilekcelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilekcelerComponent]
    });
    fixture = TestBed.createComponent(DilekcelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
