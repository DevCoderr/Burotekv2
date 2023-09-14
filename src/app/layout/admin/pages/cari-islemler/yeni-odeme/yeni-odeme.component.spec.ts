import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniOdemeComponent } from './yeni-odeme.component';

describe('YeniOdemeComponent', () => {
  let component: YeniOdemeComponent;
  let fixture: ComponentFixture<YeniOdemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniOdemeComponent]
    });
    fixture = TestBed.createComponent(YeniOdemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
