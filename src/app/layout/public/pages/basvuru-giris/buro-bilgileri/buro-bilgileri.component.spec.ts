import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuroBilgileriComponent } from './buro-bilgileri.component';

describe('BuroBilgileriComponent', () => {
  let component: BuroBilgileriComponent;
  let fixture: ComponentFixture<BuroBilgileriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuroBilgileriComponent]
    });
    fixture = TestBed.createComponent(BuroBilgileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
