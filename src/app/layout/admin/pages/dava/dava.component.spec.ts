import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavaComponent } from './dava.component';

describe('DavaComponent', () => {
  let component: DavaComponent;
  let fixture: ComponentFixture<DavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DavaComponent]
    });
    fixture = TestBed.createComponent(DavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
