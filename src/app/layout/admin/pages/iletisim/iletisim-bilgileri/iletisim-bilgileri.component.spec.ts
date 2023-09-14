import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletisimBilgileriComponent } from './iletisim-bilgileri.component';

describe('IletisimBilgileriComponent', () => {
  let component: IletisimBilgileriComponent;
  let fixture: ComponentFixture<IletisimBilgileriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IletisimBilgileriComponent]
    });
    fixture = TestBed.createComponent(IletisimBilgileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
