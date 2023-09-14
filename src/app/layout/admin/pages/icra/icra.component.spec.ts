import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcraComponent } from './icra.component';

describe('IcraComponent', () => {
  let component: IcraComponent;
  let fixture: ComponentFixture<IcraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcraComponent]
    });
    fixture = TestBed.createComponent(IcraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
