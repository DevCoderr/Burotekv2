import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismaListesiComponent } from './danisma-listesi.component';

describe('DanismaListesiComponent', () => {
  let component: DanismaListesiComponent;
  let fixture: ComponentFixture<DanismaListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanismaListesiComponent]
    });
    fixture = TestBed.createComponent(DanismaListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
