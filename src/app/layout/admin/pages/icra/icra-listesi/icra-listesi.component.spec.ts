import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcraListesiComponent } from './icra-listesi.component';

describe('IcraListesiComponent', () => {
  let component: IcraListesiComponent;
  let fixture: ComponentFixture<IcraListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcraListesiComponent]
    });
    fixture = TestBed.createComponent(IcraListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
