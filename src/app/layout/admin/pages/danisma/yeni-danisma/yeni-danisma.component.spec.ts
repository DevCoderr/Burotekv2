import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniDanismaComponent } from './yeni-danisma.component';

describe('YeniDanismaComponent', () => {
  let component: YeniDanismaComponent;
  let fixture: ComponentFixture<YeniDanismaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniDanismaComponent]
    });
    fixture = TestBed.createComponent(YeniDanismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
