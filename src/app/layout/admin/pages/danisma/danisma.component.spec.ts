import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismaComponent } from './danisma.component';

describe('DanismaComponent', () => {
  let component: DanismaComponent;
  let fixture: ComponentFixture<DanismaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanismaComponent]
    });
    fixture = TestBed.createComponent(DanismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
