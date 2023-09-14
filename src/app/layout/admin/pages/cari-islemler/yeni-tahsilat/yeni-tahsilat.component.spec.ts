import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniTahsilatComponent } from './yeni-tahsilat.component';

describe('YeniTahsilatComponent', () => {
  let component: YeniTahsilatComponent;
  let fixture: ComponentFixture<YeniTahsilatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniTahsilatComponent]
    });
    fixture = TestBed.createComponent(YeniTahsilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
