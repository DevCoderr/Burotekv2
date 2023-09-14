import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevzuatComponent } from './mevzuat.component';

describe('MevzuatComponent', () => {
  let component: MevzuatComponent;
  let fixture: ComponentFixture<MevzuatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MevzuatComponent]
    });
    fixture = TestBed.createComponent(MevzuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
