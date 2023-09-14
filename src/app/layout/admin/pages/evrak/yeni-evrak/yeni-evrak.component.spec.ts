import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniEvrakComponent } from './yeni-evrak.component';

describe('YeniEvrakComponent', () => {
  let component: YeniEvrakComponent;
  let fixture: ComponentFixture<YeniEvrakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniEvrakComponent]
    });
    fixture = TestBed.createComponent(YeniEvrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
