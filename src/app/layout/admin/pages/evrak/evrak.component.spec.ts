import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvrakComponent } from './evrak.component';

describe('EvrakComponent', () => {
  let component: EvrakComponent;
  let fixture: ComponentFixture<EvrakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvrakComponent]
    });
    fixture = TestBed.createComponent(EvrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
