import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivComponent } from './arsiv.component';

describe('ArsivComponent', () => {
  let component: ArsivComponent;
  let fixture: ComponentFixture<ArsivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArsivComponent]
    });
    fixture = TestBed.createComponent(ArsivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
