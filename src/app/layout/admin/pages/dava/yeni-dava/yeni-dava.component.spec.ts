import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniDavaComponent } from './yeni-dava.component';

describe('YeniDavaComponent', () => {
  let component: YeniDavaComponent;
  let fixture: ComponentFixture<YeniDavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniDavaComponent]
    });
    fixture = TestBed.createComponent(YeniDavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
