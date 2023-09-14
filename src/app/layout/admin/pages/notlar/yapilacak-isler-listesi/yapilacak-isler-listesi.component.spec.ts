import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YapilacakIslerListesiComponent } from './yapilacak-isler-listesi.component';

describe('YapilacakIslerListesiComponent', () => {
  let component: YapilacakIslerListesiComponent;
  let fixture: ComponentFixture<YapilacakIslerListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YapilacakIslerListesiComponent]
    });
    fixture = TestBed.createComponent(YapilacakIslerListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
