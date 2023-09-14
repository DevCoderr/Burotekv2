import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniIcraComponent } from './yeni-icra.component';

describe('YeniIcraComponent', () => {
  let component: YeniIcraComponent;
  let fixture: ComponentFixture<YeniIcraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniIcraComponent]
    });
    fixture = TestBed.createComponent(YeniIcraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
