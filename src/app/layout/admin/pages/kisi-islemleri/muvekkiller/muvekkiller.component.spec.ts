import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuvekkillerComponent } from './muvekkiller.component';

describe('MuvekkillerComponent', () => {
  let component: MuvekkillerComponent;
  let fixture: ComponentFixture<MuvekkillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuvekkillerComponent]
    });
    fixture = TestBed.createComponent(MuvekkillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
