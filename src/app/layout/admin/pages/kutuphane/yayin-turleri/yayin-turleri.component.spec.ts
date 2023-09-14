import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YayinTurleriComponent } from './yayin-turleri.component';

describe('YayinTurleriComponent', () => {
  let component: YayinTurleriComponent;
  let fixture: ComponentFixture<YayinTurleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YayinTurleriComponent]
    });
    fixture = TestBed.createComponent(YayinTurleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
