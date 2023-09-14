import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SikcaSorulanSorularComponent } from './sikca-sorulan-sorular.component';

describe('SikcaSorulanSorularComponent', () => {
  let component: SikcaSorulanSorularComponent;
  let fixture: ComponentFixture<SikcaSorulanSorularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SikcaSorulanSorularComponent]
    });
    fixture = TestBed.createComponent(SikcaSorulanSorularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
